Drop DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
use bamazon;

CREATE table products(
    itemid int NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(35) NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    price FLOAT (5,2) NOT NULL,
    stock_quantity int NOT NULL,
    begining_inventory int NOT NULL,
    PRIMARY KEY(itemid)
);

CREATE INDEX dept_NameIDX ON products (department_name);
CREATE INDEX productNameIDX ON products (product_name);

# Jewelry
INSERT INTO products(department_name, product_name, price, stock_quantity, begining_inventory)
    VALUES("Jewelry", "Mens Raymond Wiel watch", 898.45, 20, 25);

INSERT INTO products(department_name, product_name, price, stock_quantity, begining_inventory)
    VALUES("Jewelry", "Women's Diamond Necklace", 145.98, 20, 30);

INSERT INTO products(department_name, product_name, price, stock_quantity, begining_inventory)
    VALUES("Jewelry", "Women's Gold Ring", 532.55, 20, 20);



# Furniture
INSERT INTO products(department_name, product_name, price, stock_quantity, begining_inventory)
    VALUES("Furniture", "Madden Queen bed", 743.10, 20, 22);

INSERT INTO products(department_name, product_name, price, stock_quantity, begining_inventory)
    VALUES("Furniture", "Proto King bed", 200.35, 20, 20);

INSERT INTO products(department_name, product_name, price, stock_quantity, begining_inventory)
    VALUES("Furniture", "Zarina night stand", 75.35, 20, 20);

# Electronics
INSERT INTO products(department_name, product_name, price, stock_quantity, begining_inventory)
    VALUES("Electronics", "Samsung 75 OLED TV", 888.88, 21, 21);

INSERT INTO products(department_name, product_name, price, stock_quantity, begining_inventory)
    VALUES("Electronics", "Sony 65 OLED TV", 910.75, 25, 25);

INSERT INTO products(department_name, product_name, price, stock_quantity, begining_inventory)
    VALUES("Electronics", "Apple MacBook Pro", 770.20, 20, 20);

INSERT INTO products(department_name, product_name, price, stock_quantity, begining_inventory)
    VALUES("Electronics", "HP Touch Laptop", 353.99, 20, 20);

INSERT INTO products(department_name, product_name, price, stock_quantity, begining_inventory)
    VALUES("Electronics", "Microsoft Surface Laptop", 699.00, 20, 20);

# Get all products
select * from products

# Calculations
# Subtract
SELECT *, `begining_inventory`-`stock_quantity` AS `remaining` FROM `products`
# subtotal
SELECT *, (begining_inventory - stock_quantity) * price as 'subTotal' FROM products

# groupby and sund get group total
select department_name, sum((begining_inventory - stock_quantity) * price) as 'subTotal' from products GROUP BY department_name

# update STATEMENT
UPDATE PRODUCTS
SET stock_quantity = 20
WHERE PRODUCTS.itemid = 7;