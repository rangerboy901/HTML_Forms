
/*
Joseph DeWeese
17 July 2022
HTML Forms
 */





//JWD:  CALCULATE AREA BUTTON 
document.querySelector("#calcArea").addEventListener("click", function(e)
{


   if(document.querySelector("#width").reportValidity() &&
        document.querySelector("#height").reportValidity()
        )
   {
        //this code block will run if both conditions are satisfied
        let width = document.querySelector("#width").value;
        let height = document.querySelector("#height").value;
         
        let area = width * height;

        document.querySelector("#area").value = area;
       
        document.querySelector("#finalResult").innerHTML = "The area of the rectangle is "+area+".";
   }
  
});







//JWD: Button 1
document.querySelector("#button1").addEventListener("click", function (ev)
{
//JWD:  VALIDITY SCRIPT FOR USER INPUTS
            if(document.querySelector("#userName1").reportValidity() &&
                document.querySelector("#userEmail").reportValidity() &&
                document.querySelector("#userURL").reportValidity() &&
                document.querySelector("#userPassword").reportValidity

            )
            {
                //JWD:  GETTING THE VALUES FOR THE USER INPUTS
               let username = document.querySelector("#userName").value;
               let userEmail = document.querySelector("#userEmail").value;
               let userURL = document.querySelector("#userURL").value;
               let userPassword = document.querySelector("#userPassword").value;

               //JWD:  DISPLAYING THE VALUES ENTERED BY USER
               alert(`welcome to the page ${username}!`);
               alert(`Your email address: ${userEmail}`);
               alert(`URL:  ${userURL}`);
               alert(`Password ${userPassword}`);
    }

});

/*JWD:  VALIDATION*/
//JWD: Button2
document.querySelector("#button2").addEventListener("click", function (ev)
{
    console.log(document.querySelector("#num1").reportValidity());

    if(document.querySelector("#num1").reportValidity() &&
        document.querySelector("#num2").reportValidity() )
    {
        let userNum1 = parseFloat(document.querySelector("#num1").value);
        let userNum2=parseFloat(document.querySelector("#num2").value);

        let total = userNum1 + userNum2;

        alert(`The total is  ${total}!`);

        //JWD:  RADIO BUTTON 
    if(document.querySelector("#blueChoice").checked)
    {
        alert("Blue radio button is selected")
    }
    else if (document.querySelector("#redChoice").checked)
    {
    alert("Red radio button is selected");
    }
    else if(document.querySelector("#blackChoice").checked)
    {
        alert("Black radio button is selected");
    }
     //JWD:  CHECK BOX
     if(document.querySelector("#dogChoice").checked)
     {
         alert("A dog is a great pet ");
     }
     if(document.querySelector("#catChoice").checked)
     {
        alert("A cat is cool");
     }
     if(document.querySelector("#birdChoice").checked)
     {
        alert("I see no reason for anyone to own a bird...but what do I know?");
     }




    }
});

