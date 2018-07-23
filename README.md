A Node.js & MySQL command line Amazon-like storefront app that takes in a customers' order and depletes stock from the store Inventory.

It requires the following libraries to be installed by npm: mysql, inquirer, cli-table & colors.

INSTRUCTIONS

1. To run in terminal: node bamazonCustomer.js
2. On start up, you'll see the following:


┌─────────────┬────────────────────┬────────────────────┬─────────────┬─────────────┐
│ Product ID  │ Product Name       │ Department Name    │ Price       │ Quantity    │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 4           │ Mens Raymond Wiel… │ Jewelry            │ 898.45      │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 6           │ Women's Diamond N… │ Jewelry            │ 145.98      │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 7           │ Women's Gold Ring  │ Jewelry            │ 532.55      │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 8           │ Madden Queen bed   │ Furniture          │ 743.1       │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 9           │ Proto King bed     │ Furniture          │ 200.35      │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 10          │ Zarina night stand │ Furniture          │ 75.35       │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 11          │ Samsung 75 OLED TV │ Electronics        │ 888.88      │ 21          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 12          │ Sony 65 OLED TV    │ Electronics        │ 910.75      │ 25          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 13          │ Apple MacBook Pro  │ Electronics        │ 770.2       │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 14          │ HP Touch Laptop    │ Electronics        │ 353.99      │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 15          │ Microsoft Surface… │ Electronics        │ 699         │ 2           │
└─────────────┴────────────────────┴────────────────────┴─────────────┴─────────────┘
? Please enter Product ID of the product you wish to buy? (15)

3. Then you will be asked how many units of the product would like to buy (1)

├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 12          │ Sony 65 OLED TV    │ Electronics        │ 910.75      │ 25          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 13          │ Apple MacBook Pro  │ Electronics        │ 770.2       │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 14          │ HP Touch Laptop    │ Electronics        │ 353.99      │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 15          │ Microsoft Surface… │ Electronics        │ 699         │ 2           │
└─────────────┴────────────────────┴────────────────────┴─────────────┴─────────────┘
? Please enter Product ID of the product you wish to buy? (15)
? how many units of the product would you like to buy? (1)

4. Once you select the number of units and hit enter it will give you a total for your order
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 13          │ Apple MacBook Pro  │ Electronics        │ 770.2       │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 14          │ HP Touch Laptop    │ Electronics        │ 353.99      │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 15          │ Microsoft Surface… │ Electronics        │ 699         │ 1           │
└─────────────┴────────────────────┴────────────────────┴─────────────┴─────────────┘
? Please enter Product ID of the product you wish to buy? 15
? how many units of the product would you like to buy? 1
Your order for 1 Microsoft Surface Laptop has been placed!
Your total is 699.00
? Would you like to order anything else? (Y/n)n
Thank you for shopping with us!

5. It will not purchase your order if there is not enough of inventory
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 13          │ Apple MacBook Pro  │ Electronics        │ 770.2       │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 14          │ HP Touch Laptop    │ Electronics        │ 353.99      │ 20          │
├─────────────┼────────────────────┼────────────────────┼─────────────┼─────────────┤
│ 15          │ Microsoft Surface… │ Electronics        │ 699         │ 1           │
└─────────────┴────────────────────┴────────────────────┴─────────────┴─────────────┘
? Please enter Product ID of the product you wish to buy? 15
? how many units of the product would you like to buy? 3
Sorry, Not enough inventory! Available inventory: 1
? Would you like to order anything else? (Y/n)n
