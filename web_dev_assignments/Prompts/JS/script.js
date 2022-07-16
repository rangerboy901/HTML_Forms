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
let cart1Item = prompt("Enter the name of the first item you wish to purchase.");//JWD: Item Name
console.log("Item 1: " + cart1Item);
let item1Cost = prompt("Enter the price of the "+ cart1Item);//JWD: Item Cost 
console.log("Cost of Item 1: " + item1Cost);
let item1Qty = prompt("How many do you wish to purchase?");//JWD: Purchase Quantity
console.log("***Quantity: " + item1Qty);

//JWD:  TOTAL FOR CART 1
let totalCart1 = item1Cost * item1Qty
console.log("Total of first item:  $"+ totalCart1);
console.log("____________________")

//JWD:  CART 2
let cart2Item = prompt("Item 2:  Enter the name of the next item you wish to purchase.");//JWD: Item Name
console.log("Item 2: " + cart2Item);
let item2Cost = prompt("Enter the price of the "+ cart2Item);//JWD: Item Cost 
console.log("Cost of Item 2: " + item2Cost);
let item2Qty = prompt("How many do you wish to purchase?");//JWD: Purchase Quantity
console.log("***Quantity: " + item2Qty);

//JWD:  TOTAL FOR CART 2
let totalCart2 = item2Cost * item2Qty;
console.log("Total of second item:  $"+totalCart2);
console.log("____________________")

//JWD:  PROMPT FOR SALES TAX
let salesTax = prompt("Please enter your sales tax:");
console.log("Sales tax:  %" + salesTax);

//JWD:  CART RESULTS AND SUMMARY
    //JWD: PROPERTIES
let totPurch = totalCart1 + totalCart2;
let totTx = (totPurch * salesTax) / 100;
let total = totPurch + totTx;
    //JWD: CONSOLE REPORT
console.log("Total cost:  $" + totPurch);

console.log("Total sales tax:  $" + totTx);
console.log("____________________")

console.log("Total Purchase:  $" + total);

console.log("Thank you, please come again!")

