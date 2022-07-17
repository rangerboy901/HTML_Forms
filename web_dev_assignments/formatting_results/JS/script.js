/*
Joseph DeWeese
16 July 2022
Formatting Results
 */

//  calculate area of a triangle based upon user input

/*JWD:  ALERT USER TO PROGRAM */
alert("In this exercise, you will be prompted for dimensions of a rectangle from which the area of the object will be calculated!");


/*JWD:  PROMPT USER */
let height = parseFloat(prompt("What is the height of your rectangle?","EX: 7.50"));
let width = parseFloat(prompt("what is the width of your rectangle?",":Ex: 3.75"));


/*JWD:  CALCULATIONS */
let area =  height*width;
//parse to correct data types
document.querySelector("#height").innerHTML = "The height: "+height;
// Text string start and end with double or single quote.
//interpolation method:
document.querySelector("#width").innerHTML = `Width:  ${width}`;

/*JWD:  CALCULATIONS */
//JWD: Math.round(numToRound);
//.toFixed()# of decimal Places)

document.querySelector("#finalResults").innerHTML = `Area of Rectangle:  ${area.toFixed(2)}`;


/*JWD:  ALERT USER TO PROGRAM */
let showGraph = prompt("Would you like to see the graph?"," Yes or No");

if(showGraph.toLowerCase() === "yes")
{
    alert("One Moment...Generating Graph...")
    //Which graphic do we need? ...set the source (src)
    //nested conditional
    if(area >= 50)
    {
        document.querySelector("#graph").src="IMG/areaGreater.jpg";
    }
else if(area<50)
    {
        document.querySelector("#graph").src="IMG/areaLess.jpg";
    }
else
    {
        alert("ERROR:  User Input Unorthodox");
    }
    //Make the graph visible
    document.querySelector("#graph").style.visibility="visible";

}
else if(showGraph.toLowerCase() === "no")
{
    alert("Thank you for trying my calculator!")
}
else
{
    alert("Error:  Incorrect Selection");
}