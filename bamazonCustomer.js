var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "EGsk0314",
  database: "bamazon"
});
//to select everything in the products table


connection.connect();
 


function showTable() {
    connection.query("SELECT item_id, product_name, department_name, price, stock_quantity FROM products; ", function (error, results, fields) {
  // error will be an Error if one occurred during the query 
  // results will contain the results of the query 
  // fields will contain information about the returned results fields (if any) 
        console.table(results);
});
}

showTable();

//Inquirer - find which ID they want to pull



