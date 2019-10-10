"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin

// if(isAdmin){
//    show a specific navbar
// }

//Together: Send a 20% off coupon if its users birthday
//if(isBirthday){
// send 20% discount
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true

 // var isRainy = true;
 // if(isRainy){
 //   alert("It's raining")
 // }



//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 100;
// var currentBalance = 200;
//
// if(itemCost < currentBalance){
//     alert("You can buy this!");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var numberOfLives = 0;
// if(numberOfLives === 0){
//     alert("Sorry, game over.");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var weather = "snowing";
// if(weather === "snowing"){
//     alert("It's Snowing!?");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 15;
// if(numberInput > 10){
//     alert("True!");
// }


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = false;
//
// if(isAdmin){
//show specific navbar
//     alert("User is admin!");
// } else {
//     alert("Regular user.");
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var isRainy = true;
//
// if(isRainy){
//     //show raining icon
//     alert("It's raining buddy.")
// } else {
//     //show no rain
//     alert("Have a nice day")
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 1;
//
// if(numberOfLives === 0){
//     alert("Sorry, game over.");
// } else {
//     alert("Next Level!")
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "snowing";
//
// if(weather === "snowing"){
//     alert("It's snowing!");
// } else {
//     alert("Check back later for more details!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberOfInput = 11;
//
// if(numberOfInput > 10){
//     alert("True!");
// } else {
//     alert("Number is less than 10 buddy");
// }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// function checkIfGameIsOver(){
//
//
// var numberOfLives = 0;
//
// if(numberOfLives === 0){
//     return "Sorry, game over.";
// } else {
//     return "Next Level!";
//  }
// }
//
// console.log(checkIfGameIsOver(numberOfLives));


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

// function weatherOutside(){
//
// var weather = "snowing";
//
// if(weather === "snowing"){
//     return "It's snowing!";
// } else {
//     return "Check back later for more deetz!";
//  }
// }
//
// console.log(weatherOutside(weather));

// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"


// var isOfAge = confirm("Are you 13 years of age or older?");
//
// if(isOfAge === true){
//     alert("You may proceed.");
// } else {
//     alert("You are too young, but thanks for being honest!");
// }

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "snowing";
//
// if(weather === "snowing"){
//     alert("it's snowing!");
// } else if (weather === "raining"){
//     alert("it's raining.");
// } else if (weather === "sunny"){
//     alert("it's sunny")
// } else {
//     alert("have a nice day.")
// }



//Together: refactor the above statement as a function
// function outsideToday(weather) {
//
//
//     if (weather === "snowing") {
//         return "it's snowing!";
//     } else if (weather === "raining") {
//         return "it's raining.";
//     } else if (weather === "sunny") {
//         return "it's sunny";
//     } else {
//         return "have a nice day.";
//     }
// }
//
// console.log(outsideToday("sunny"));
// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// function trafficLight(light) {
//
//
//     if (light === "green") {
//         return "Keep going!";
//     } else if (light === "yellow") {
//         return "Slow down and prepare to stop.";
//     } else if (light === "red") {
//         return "Stop the car, Crazy!";
//     } else {
//         return "Drive safe.";
//     }
// }
//
// console.log(trafficLight("blue"));


// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligible for a license.


// var userAge = 16;
// var hasPermit = false;
//
// if(userAge < 15){
//     alert("Sorry, You are too young");
// } else {
//     if(userAge === 15){
//         alert("You can have a permit.");
//     } else if(userAge >= 16 && hasPermit){
//         alert("you can have a license.");
//     } else if(userAge >= 16 && !hasPermit) {
//         alert("You need a permit first.");
//     }
// }




// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

// var weather = "sunny";
// var weatherMessage = (weather === "rainy") ? "It's raining outside." : "Have a nice day!";
// console.log(weatherMessage);


// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

// function checkWeather(weather) {
//     switch (weather) {
//         case 'rainy':
//             return "It's raining!";
//         case 'sunny':
//             return "Suns out!";
//         case 'snow':
//             return "It's snowing outside";
//         default:
//             return "Have a nice day!";
//     }
// }
//
// console.log(checkWeather(weather));
//TODO: Rewrite the intersection function from earlier as a switch statement.

// var light = "yellow";
//
// switch (light) {
//     case "green":
//         console.log("Keep going buddy.");
//         break;
//     case "yellow":
//         console.log("Slow down.");
//         break;
//     case "red":
//         console.log("Stop");
//         break;
//     default:
//         console.log("Proceed with caution.")
// }

function checkTrafficLight(trafficLight) {
    switch (trafficLight) {
        case "green":
            return "keep going";
        case "yellow":
            return "slow down";
        case "red":
            return "stop";
        default:
            return "who knows";
    }
}

console.log(checkTrafficLight("green"));
// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
//a confirm statement that if true true adds 5 dollars to the piggy bank


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html
//If/else statement with a selector switch that changes based off of the selection


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
//either a confirm with the white page as a default false and if clicked true the page changes layout to a dark page or
//and if else statement but instead of a comment output it uses a page layout