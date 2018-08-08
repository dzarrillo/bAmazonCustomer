A Node.js & MySQL command line Amazon-like storefront app that takes in a customers' order and depletes stock from the store Inventory.

bamazonCustomer.js requires the following libraries to be installed by npm: mysql, inquirer, cli-table & colors.

INSTRUCTIONS

1. To run in terminal: node bamazonCustomer.js


2. On start up, you'll see the following:

![Screen1](https://github.com/dzarrillo/bAmazonCustomer/blob/master/images/Screen1.png)
  It will ask you the productid of the product you wish to purchace.  I selected productid 4.
  
  
3. Then you will be asked how many units of the product would like to buy?  I entered 3.

![Screen2png](https://github.com/dzarrillo/bAmazonCustomer/blob/master/images/Screen2png.png)


4. Once you select the number of units and hit enter it will give you a total of your order.

![Screen3](https://github.com/dzarrillo/bAmazonCustomer/blob/master/images/Screen3.png)


5. Once the order is placed it will subtract from the quantity.  

![Screen4](https://github.com/dzarrillo/bAmazonCustomer/blob/master/images/Screen4.png)


5. It will not purchase your order if there is not enough of inventory

![Screen5](https://github.com/dzarrillo/bAmazonCustomer/blob/master/images/Screen5.png)
















