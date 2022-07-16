/*
Joseph DeWeese
16 July 2022
Buttons
 */

//JWD: BUTTON 1
document.querySelector("#button1").addEventListener("click", function (e)
{
    alert("Button has been clicked!");
});

// add event listener to each button

//JWD: PINK
document.querySelector("#makePink").addEventListener("click", function (e)
{
    document.querySelector("#firstH1").className = "pink";
});

//JWD: BLUE
document.querySelector("#makeBlue").addEventListener("click", function (e)
{
    document.querySelector("#firstH1").className = "blue";
});


//JWD:  ADD LISTENERS TO IMAGE BUTTONS
document.querySelector("#greater").addEventListener("click", function (ev) {
    //JWD:  TARGET THE IMAGE AND CHANGE THE SOURCE
    document.querySelector("#pictureGreater").src = "IMG/areaGreater.jpg"
});
document.querySelector("#less").addEventListener("click", function (ev) {
    //JWD:  TARGET THE IMAGE AND CHANGE THE SOURCE
    document.querySelector("#pictureGreater").src = "IMG/areaLess.jpg";
});
document.querySelector("#tn").addEventListener("click", function (ev) {
    //JWD:  TARGET THE IMAGE AND CHANGE THE SOURCE
    document.querySelector("#pictureGreater").src = "IMG/tn.jpg"
});

/*JWD: USER PROMPT TO CHANGE THE PICTURE */

userAnimal = prompt("What would you like to see a picture of?  Greater, Less, or Tennessee?");

//create the conditional
if(userAnimal === "Greater")
{
    document.querySelector("#pictureGreater").src = "IMG/areaGreater.jpg"
}
else if(userAnimal === "Less")
{
    document.querySelector("#pictureGreater").src = "IMG/areaLess.jpg"
}
else if (userAnimal === "Tennessee")
{

    document.querySelector("#pictureGreater").src = "IMG/tn.jpg"
}
else {
    alert("You have made an incorrect selection!");
}