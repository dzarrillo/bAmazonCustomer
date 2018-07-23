var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var colors = require('colors');
var prodArr = [];
// var arrAllProducts = [];


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3307
    port: 3307,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    getProducts();
}


// function to handle posting new items up for auction
function getProducts() {
    connection.query('SELECT * FROM products', function (err, results) {
        if (err) throw err;

        // create table for display of data

        var table = new Table({
            head: ["Product ID".blue, "Product Name".blue, "Department Name".blue, "Price".blue, "Quantity".blue],
            colWidths: [13, 20, 20, 13, 13],
        });

        // var arrProducts = getProdArray(results);

        for (var c = 0; c < results.length; c++) {
            console.log();
            // Get all products
            var allProducts = new Object();
            allProducts.begining_inventory = results[c].begining_inventory;
            allProducts.department_name = results[c].department_name;
            allProducts.itemid = results[c].itemid;
            allProducts.price = results[c].price;
            allProducts.product_name = results[c].product_name;
            allProducts.stock_quantity = results[c].stock_quantity;
            prodArr.push(allProducts);

            table.push(
                [results[c].itemid, results[c].product_name, results[c].department_name, results[c].price, results[c].stock_quantity]
            );
        }

        console.log(table.toString());

        inquirer
            .prompt([
                {
                    name: "item",
                    type: "input",
                    message: "Please enter Product ID of the product you wish to buy?",
                    validate: checkItemIDInput,
                    filter: Number
                },
                {
                    name: 'quantity',
                    type: 'input',
                    message: 'how many units of the product would you like to buy?',
                    validate: checkNumberInput,
                    filter: Number
                }
            ])
            .then(function (choice) {
                // console.log("itemid  " + choice.item);
                // console.log("quantity  " + choice.quantity);
                // console.log("array " + prodArr.length)
                for (var v = 0; v < prodArr.length; v++) {
                    // console.log("item " + prodArr[v].itemid);

                    if (prodArr[v].itemid === choice.item) {
                        // console.log("quantity - " + choice.quantity + " in " + prodArr[v].stock_quantity);

                        if (choice.quantity <= prodArr[v].stock_quantity) {
                            // update the products table
                            connection.query("UPDATE products set ? where ?", [{
                                stock_quantity: prodArr[v].stock_quantity - choice.quantity
                            }, { itemid: choice.item }], function(err, results) {
                                if (err) throw err;

                                var cost = parseFloat(choice.quantity * prodArr[v].price);
                                cost = cost.toFixed(2);
                                console.log("Your order for " + choice.quantity 
                                    +  " " + prodArr[v].product_name + " has been placed!");
                                console.log("Your total is " + cost);
                                orderMore();
                            });

                        } else {
                            console.log("Sorry, Not enough inventory! Available inventory - " + prodArr[v].stock_quantity);
                            orderMore();
                        }
                        break;
                    }
                }


            });
    });

}


// validate Input makes sure that the user is supplying only positive integers for their inputs
function checkNumberInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Please enter a whole non-zero number.';
    }
}

function checkItemIDInput(value) {

    for (var x = 0; x < prodArr.length; x++) {
        // console.log("value " + value + "  itemid " + prodArr[x]);
        if (value === prodArr[x].itemid) {
            return true;
        }
    }
    return 'Please enter an existing product ID!';

}

function exit() {
    connection.end();
    console.log("Thank you for shopping with us!");
}

function orderMore() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to order anything else?",
            name: "again"
        },
    ]).then(function (user) {
        if (user.again) {
            start();
        } else {
            exit();
        }
    });
}
