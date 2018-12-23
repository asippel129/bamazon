//dependencies
var mysql = require("mysql");
var inquirer  = require("inquirer");
require("console.table");


var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  productsDisplay();
});

//we display the content of our database products table in the console 
function productsDisplay() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.table(res);
        //our inquirer prompt
        askCustomer(res);
    });
}


//our inquirer prompt asking users what they would like to purchase
function askCustomer(item) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "itemChoice",
          message: "See anything you like? Specify the item you would like to purchase by entering the ID number associated with that item!",
          validate: function(val) {
              return !isNaN(val) 
          }
        }
      ])
      .then(function(val) {
        var choiceId = parseInt(val.itemChoice);
        var product = checkInventory(choiceId, item);
  
        // if a product matches the id the customer provided:
        if (product) {
          // we will pass the product to our prompt to deal with the amount:
          itemQuantityPrompt(product);
        }
        else {
          //if there is not enough quantity in stock, we will return to the prompt asking for the ID # of the item they would like to purchase
          console.log("\nThat item is not in the inventory.");
          productsDisplay();
        }
      });
  }


  // Prompt asking the customer how much of the product they would like purchase
function itemQuantityPrompt(product) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "quantity",
          message: "How many of this item would you like to purchase?",
          validate: function(val) {
            return val > 0 
          }
        }
      ])
      .then(function(val) {
        var quantity = parseInt(val.quantity);
  
        // If not enough quantity, tell the customer and then reload the initial table of products
        if (quantity > product.stock_quantity) {
          console.log("\n There is not enough stock left of that item!");
          productsDisplay();
        }
        else {
          // otherwise we will run our purchaseProduct function that will subtract the amount purchased from the availabe stock quantity
          purchaseProduct(product, quantity);
        }
      });
  }

  // Purchase the desired quantity of that item and subtract the quantity purchased from the stock_quantity from the table
function purchaseProduct(product, quantity) {
    connection.query(
      "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
      [quantity, product.item_id],
      function(err, res) {
        // Console log to let the user know that they successfully purchased their item
        console.log("\nThank you! You have purchased " + quantity + " " + product.product_name + "'s! Please shop again soon!");
        productsDisplay();
      }
    );
  }
  
  // Our function to check if the desired quantity that the user wants exists in the table
function checkInventory(choiceId, item) {
    for (var i = 0; i < item.length; i++) {
      if (item[i].item_id === choiceId) {
        return item[i];
      }
    }
    return null;
  }
  


  
  