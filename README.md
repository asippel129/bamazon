**Bamazon Customer View Assignment**

For this assignment, we were tasked with creating an **Amazon-like** storefront with the **MySQL** skills we have learned in this unit. The app takes in orders from customers and depletes stock from the store's inventory. 

The app prompts users with two messages:
*Asks them the ID of the product they would like to buy.
*Asks how many units of the product they would like to buy.

Below are my screenshots to prove that the app is working as it should:

*Once the application is running, the user is prompted with the table of products (I created a table of 10 products to use as examples, along with their department, price, and stocked quantity) and asked which product they would like ot purchase (using inquirer) by typing in an ID number associated with the item
*Once the user enters an ID associated with a product, they are then prompted (with inquirer) to enter a quantity of the item 
*If there is enough stocked, the user will be shown a message saying "Thank you! You have purchased (amount of item and item name) Please shop again soon!" And the quantity they purchased is then subtracted from the stocked quantity when they were first prompted.
![first prompt](/images/bamazon1.png)
Format: ![Alt Text](url)

*However, if there is not enough stocked quantity that the user wants of the item, they are met with a message "Sorry! There is not enough stock left of that item" and are then re-prompted to pick an ID of an item they would like to purchase.
![first prompt](/images/bamazon2.png)
Format: ![Alt Text](url)
