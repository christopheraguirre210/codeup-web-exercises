"use strict";

console.log("Hello from external JavaScript!")

alert("Welcome to my website!")

var response = prompt("What is your favorite color?");
alert("Awesome, " + response + " is my favorite color too!");

var mermaid = 3;
var bear = 5;
var hercules = 1;

prompt("If a movie costs 3 dollars a day, how much did you have to pay?");
alert((mermaid * 3) + (bear * 3) + (hercules * 3) + "dollars!");

var google = 400;
var amazon = 380;
var facebook = 350;

prompt("10 hours FB, 6 hours GG, 4 hours AZ. How much did you get paid");
alert((google * 6) + (amazon * 4) + (facebook * 10) + "dollars");

//enroll question
var classTime = "9AM";
var classSize = 125;
var currClassSize = 108;
var studentClassTime = "9AM";
var studentCanSignUp = currClassSize < classSize && classTime !== studentClassTime;
console.log(studentCanSignUp);

// function college() {
//     var full = true;
//     var conflict = true;
//     if (!full && !conflict) {
//         return "enroll";
//     } else {
//         return "can't enroll"
//     }
// }
//
// console.log(college());
// enroll question ^^
//discount question
var offerValid = true;
var cart = 3;
var premiumMember = false;
var canHasDiscount = offerValid && (cart > 2 || premiumMember)
console.log(canHasDiscount);

// function productOffer() {
//     var moreThanTwo = true;
//     var expired = true;
//     var premium = true;
//
//     if((moreThanTwo && !expired) || premium) {
//         return "offer"
//     } else {
//         return "no offer"
//     }
// }
// discount question ^^
//exercise #4 below

var username = 'codeup';
var password = 'notastrongpassword';

console.log(password.length >= 5 && password.indexOf(username) === -1 && username.length <= 20 && username === username.trim() &&
    password === password.trim());
