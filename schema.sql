DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;
 
CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
    
    product_name VARCHAR (100),
    
    department_name VARCHAR (50),
    
    price INT,
    
    stock_quantity INT,
    
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jack in the Box", "Toy", 10, 300), 
("Cle de Peau Face Lotion", "Beauty", 100, 50), 
("Neutogena Acne Cleanser", "Beauty", 7, 100), 
("Nike Soccer Cleats", "Recreation", 50, 25), 
("Anthropology Knit Blanket", "Home", 150, 10), 
("Starbucks Coffee Grounds Dark Roast", "Beverage", 10, 200), 
("Puffs Kleenex 12-Pack", "Home", 20, 100), 
("Amazon Echo", "Electronics", 60, 1000), 
("Ugg Slippers", "Shoes", 100, 120), 
("Eucalyptus Candle", "Spa", 15, 100);

SELECT * FROM products;