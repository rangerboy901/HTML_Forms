
/*
Joseph DeWeese
8 July 2022
Prompting the user
*/


//JWD: ALERT WITH STORE INTRODUCTION
window.alert("Welcome to your virtual shopper!");

//JWD:  USERNAME WITH INSTRUCTIONS
let userName = prompt("Hello!  What is your name?");
window.alert("Welcome " + userName + "!  You will next be prompted to enter your purchase selection along with price and required sales tax.");

//JWD:  ***PROMPT FOR COMPLETION OF CART***
//JWD:  CART 1
console.log("CLIENT:  " + userName);
console.log("____________________")
let cart1Item = prompt("Enter the name of the first item you wish to purchase.");//JWD: Item Name
let item1Cost = prompt("Enter the price of the "+ cart1Item);//JWD: Item Cost 
let item1Qty = prompt("How many do you wish to purchase?");//JWD: Purchase Quantity
let totalCart1 = parseFloat(item1Cost) * Number(item1Qty);

//JWD:  CART 2
let cart2Item = prompt(" Enter the name of the next item you wish to purchase.");//JWD: Item Name
let item2Cost = prompt("Enter the price of the "+ cart2Item);//JWD: Item Cost 
let item2Qty = prompt("How many do you wish to purchase?");//JWD: Purchase Quantity
let totalCart2 = parseFloat(item2Cost) * Number(item2Qty);

//JWD:  CONSOLE REPORT: TOTAL 
let totPurch = parseFloat(totalCart1) + parseFloat(totalCart2);

console.log ("("+Number(item1Qty)+") "+cart1Item+"(s) @ $"+parseFloat(item1Cost)+"(each) = $"+parseFloat(totalCart1));
console.log("("+Number(item2Qty)+") "+cart2Item+"(s) @ $"+parseFloat(item2Cost)+"(each) = $"+parseFloat(totalCart2));
console.log("Subtotal before tax:  $" + parseFloat(totPurch));

//JWD:  PROMPT FOR SALES TAX
let salesTax = prompt("Please enter your sales tax:");
let totTx = (parseFloat(totPurch) * parseFloat(salesTax)) / 100;
let total = parseFloat(totPurch) + parseFloat(totTx);

//JWD:  CART RESULTS AND SUMMARY
console.log(+salesTax+"% Sales tax = $"+ parseFloat(totTx));
console.log("Grand Total Purchase= $" + parseFloat(total));
console.log("____________________")

console.log("Thank you, please come again!")


