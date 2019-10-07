"use strict";

console.log("Hello from external JavaScript!");

alert("Welcome to my website!");
// below is my movie store
var response = prompt("What is your favorite color?");
alert("Awesome, " + response + " is my favorite color too!");

var mermaid = parseInt(prompt("How long would you like to rent The Little Mermaid?"));
var bear = parseInt(prompt("How long would you like to rent Brother Bear?"));
var hercules = parseInt(prompt("How long would you like to rent Hercules?"));

alert("Your total comes out to $" + (mermaid + bear + hercules) * 3 + ".");

//below is hourly tech work

var googPay = parseInt(prompt("Working for Google pays $400/hr. How many hours of work was done at Google?")) * 400;
var fBPay = parseInt(prompt("Working for Facebook pays $350/hr. How many hours of work was done at Facebook?")) * 350;
var zonPay = parseInt(prompt("Working for Amazon pays $380/hr. How many hours of work was done at Amazon?")) * 380;

alert("Your pay comes out to " + (googPay + fBPay + zonPay) + ".");


//enroll question
var classTime = "9AM";
var classSize = 125;
var currClassSize = 108;
var studentClassTime = "9AM";
var studentCanSignUp = currClassSize < classSize && classTime !== studentClassTime;
console.log(studentCanSignUp);

// enroll question ^^
//discount question
var offerValid = true;
var cart = 3;
var premiumMember = false;
var canHasDiscount = offerValid && (cart > 2 || premiumMember);
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
