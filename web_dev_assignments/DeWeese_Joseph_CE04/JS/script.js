/*
Joseph W DeWeese
10 July 2022
Conditionals
*/

//JWD: INTRODUCTION
let userName = prompt("What is your name?");
console.log("USERNAME: "+userName);
console.log("____________________");
alert("Hello "+userName+", this program will introduce you to 3 different calculators, brought to life by Javascript!");
alert("Calculator #1: Convert grade from a percentage to a letter grade.");

//JWD:  PROMPT USER FOR PERCENTAGE GRADE
let percentGrade = parseInt(prompt(" Please enter the percentage:  %"));


//JWD: GRADING SCHEME(
if(percentGrade > 89 && percentGrade <= 100)
{
    let letterGrade = "A"
    console.log("You have a(n) "+percentGrade+"%, which means you have earned a(n) "+letterGrade+" in the class!")

}else if(percentGrade <= 89 && percentGrade > 79 )
{
    let letterGrade = "B"
     console.log("You have a(n) "+percentGrade+"%, which means you have earned a(n) "+letterGrade+" in the class!");
}else if (percentGrade <=79 && percentGrade >69 )
{
    let letterGrade = "C"
     console.log("You have a(n) "+percentGrade+"%, which means you have earned a(n) "+letterGrade+" in the class!");
}else if (percentGrade <=69 && percentGrade >58)
{
    let letterGrade = "D"
     console.log("You have a(n) "+percentGrade+"%, which means you have earned a(n) "+letterGrade+" in the class!");
}else if (percentGrade <=59)
{
    let letterGrade = "F"
     console.log("You have a(n) "+percentGrade+"%, which means you have earned a(n) "+letterGrade+" in the class!");
}else if (percentGrade > 100)
{
    
     console.log("You have entered a value greater than 100%");
}

//JWD: INTRODUCTION TO PUMPKIN PATCH

alert("Calculator #2: Determine cost of pumpkin by its weight.");

//JWD:  PROMPT USER FOR WEIGHT OF PUMPKIN
let pmknWt = parseFloat(prompt(" Please enter the weight of the pumpkin"));

if (pmknWt < 5.5)
{
    let pmknCost = pmknWt * 1.00;
    console.log("Your pumpkin of "+parseFloat(pmknWt)+"lbs., costs $"+parseFloat(pmknCost));
    //Your pumpkin of Xlbs costs $Y
}else if (pmknWt > 5.4 && pmknWt <10.75)
{
    let pmknCost = pmknWt * .90;
    console.log("Your pumpkin of "+parseFloat(pmknWt)+"lbs., costs $"+parseFloat(pmknCost));
}else if (pmknWt < 25 && pmknWt >= 10.75)
{
    let pmknCost = pmknWt * .80;
    console.log("Your pumpkin of "+parseFloat(pmknWt)+"lbs., costs $"+parseFloat(pmknCost));
}else if (pmknWt <= 25 && pmknWt <50)
{
    let pmknCost = pmknWt * .70;
    console.log("Your pumpkin of "+parseFloat(pmknWt)+"lbs., costs $"+parseFloat(pmknCost));
}else if (pmknWt >= 50 && pmknWt <= 100)
{
    let pmknCost = pmknWt * .60;
    console.log("Your pumpkin of "+parseFloat(pmknWt)+"lbs., costs $"+parseFloat(pmknCost));
}else if (pmknWt > 100)
{
    let pmknCost = pmknWt * .50;
    console.log("Your pumpkin of "+parseFloat(pmknWt)+"lbs., costs $"+parseFloat(pmknCost));
}else if (pmknWt < 0) 
{
    console.log("ERROR: Your weight is incorrect");
}


//JWD: INTRODUCTION TO LOYALTY CARD CALCULATOR
alert("Calculator #3: Loyalty Card Calculator.");
alert("This calculator will prompt you for 2 items to purchase.  The total price will then be determined along with any applicable discount.");

//JWD:  USERNAME WITH INSTRUCTIONS


//JWD:  ***PROMPT FOR COMPLETION OF CART***
//JWD:  CART 1

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
console.log("Subtotal before discount:  $" + parseFloat(totPurch));

//JWD:  PROMPT FOR LOYALTY MEMBERSHIP
let discount = prompt("Are you a loyalty member? (Yes / No)");

//JWD:  CART RESULTS AND SUMMARY
if(discount = "Yes")
{
let dscntTot = ((parseFloat(totPurch) * parseFloat(15))) / 100;
let total = parseFloat(totPurch) - parseFloat(dscntTot);
console.log("Loyalty discount: $"+dscntTot);
console.log("Grand Total Purchase= $" + parseFloat(total));
}else if(discount = "No")
{
    console.log("Grand Total Purchase= $" + parseFloat(totPurch));

}






console.log("____________________")

console.log("Thank you, please come again!")


