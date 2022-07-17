
/*
Joseph DeWeese
17 July 2022
E05: Query Selector
 */


/*JWD:  PROBLEM #1:   DISCOUNT CALCULATOR  */
//JWD: INTRODUCTION TO LOYALTY DISCOUNT CALCULATOR
alert("This calculator will prompt you for 2 items to purchase.  The total price will then be determined along with any applicable discount.");

/*JWD:  PROMPT USER */
//JWD:  CART 1
let cart1Item = prompt("Enter the name of the first item you wish to purchase.");//JWD: Item Name
let item1Cost = prompt("Enter the price of the "+ cart1Item);//JWD: Item Cost
let item1Qty = prompt("How many do you wish to purchase?");//JWD: Purchase Quantity
//JWD: CALCULATION FOR CART 1 TOTAL
let totalCart1 = parseFloat(item1Cost) * Number(item1Qty);
//JWD:  QUERY SELECTOR REPORT: TOTAL
alert("Up next, your second item...");
document.querySelector("#item1").innerHTML=     `First Item:  ${cart1Item}`;
document.querySelector("#item1Cost").innerHTML=     `Quantity:   ${item1Qty}`;
document.querySelector("#totalItems1").innerHTML=     `Sub-Total:   ${totalCart1.toFixed(2)}`;
//JWD:  CART 2

let cart2Item = prompt(" Enter the name of the next item you wish to purchase.");//JWD: Item Name
let item2Cost = prompt("Enter the price of the "+ cart2Item);//JWD: Item Cost
let item2Qty = prompt("How many do you wish to purchase?");//JWD: Purchase Quantity
//JWD: CALCULATION FOR CART 2 TOTAL
let totalCart2 = parseFloat(item2Cost) * Number(item2Qty);
//JWD:  QUERY SELECTOR TOTAL


document.querySelector("#item2").innerHTML=     `Second Item:  ${cart2Item}`;
document.querySelector("#item2Cost").innerHTML=     `Quantity:   ${item2Qty}`;
document.querySelector("#totalItems2").innerHTML=     `Sub-Total:   ${totalCart2.toFixed(2)}`;

//JWD:  PROMPT FOR LOYALTY MEMBERSHIP
let discount = prompt("Are you a loyalty member?",":EX: y/n");

let totPurch = parseFloat(totalCart1) + parseFloat(totalCart2);
//JWD:  CART RESULTS AND SUMMARY
if(discount ==="y" )
{
    let dscntTot = parseFloat(totPurch) * parseFloat(10/100);
    let total = parseFloat(totPurch) - parseFloat(dscntTot);

    document.querySelector("#loyalty").innerHTML= `Your discount:  $${dscntTot.toFixed(2)}`;
    document.querySelector("#totalPriceGreen").innerHTML= `Your total price:  $${total.toFixed(2)}, this also includes your 10% discount.`;

}
else if(discount === "n")
{

    document.querySelector("#totalPriceYellow").innerHTML= `Your total price:  $${total.toFixed(2)}, this also includes your 10% discount.`;
}
else
{alert("ERROR:  You have made an incorrect entry.   Refresh your browser and start again.");}

/*JWD: *************************** PROBLEM #2:   LAST GAS STATION FOR MILES ********************************/

/*JWD:  PROBLEM #2:   LAST GAS STATION FOR MILES */
alert("Let's find out if you can cross the desert with the amount of gas you have, or if you should stop for gas. ");

/*JWD:  CALCULATIONS */
let maxGallons = parseFloat(prompt("What are the maximum  gallons of gas your vehicle can hold ?","EX: 7.50"));
let currentAmount = parseFloat(prompt("What percent of gas is in your tank?",":Ex: 75"));
let mpg = parseFloat(prompt("How many miles per gallon (MPG) does your car average?",":Ex: 22.4"));
let totalGallonsRemaining = maxGallons  * (currentAmount /  100);
let totalMilesRemaining = totalGallonsRemaining * mpg;
/*JWD:  ADD LISTENERS TO IMAGE BUTTONS*/

//JWD:  Text Answer
document.querySelector("#textAnswer").addEventListener("click", function (ev) {
    //JWD:  TARGET THE IMAGE AND CHANGE THE SOURCE
    if(totalMilesRemaining >= 200)
    {
        document.querySelector("#totGreen").innerHTML = `Yes, you can drive ${totalMilesRemaining.toFixed(2)} miles and you can make it without stopping for gas!`

    }
    else if(totalMilesRemaining < 200)
    {
        document.querySelector("#totYellow").innerHTML = `You can only  drive ${totalMilesRemaining.toFixed(2)} miles more, better get gas now while you can!`
    }
    else{alert("ERROR:  Refresh screen and start again.")}
});

//JWD:  GRAPH Answer
document.querySelector("#graphicAnswer").addEventListener("click", function (ev) {
    //JWD:  TARGET THE IMAGE AND CHANGE THE SOURCE
    if(totalMilesRemaining >= 200)
    {
        document.querySelector("#graph").src="IMG/enoughGas.jpg";
        //Make the graph visible
        document.querySelector("#graph").style.visibility="visible";
    }
    else if(totalMilesRemaining < 200)
    {
        document.querySelector("#graph").src="IMG/notEnoughGas.jpg";
        //Make the graph visible
        document.querySelector("#graph").style.visibility="visible";
    }
    else{alert("ERROR:  Refresh screen and start again.")}
});









