(function () {

"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
confirm("Pick a number, any number");




/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor);


function analyzeColor() {
    if(randomColor === 'red') {
        return "Roses are red!"
    } else if(randomColor === 'orange') {
        return "Oranges are orange haha."
    } else if(randomColor === 'yellow') {
        return "Yellow is a funny color."
    } else if(randomColor === 'green') {
        return "Green grass is good grass."
    } else if(randomColor === 'blue') {
        return "Blue is my favorite color."
    } else if(randomColor === 'indigo') {
        return "Is indigo a type of purple?"
    } else if(randomColor === 'violet') {
        return "Violet is definitely purple!"
    } else {
        return "I don't know about that color"
    }
}

console.log(analyzeColor(randomColor));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch (randomColor) {
    case 'red':
        console.log("Red Cream Sodaaaaa!");
        break;
    case 'orange':
        console.log("Orange Sodaaaaaa!");
        break;
    case 'yellow':
        console.log("Pineapple Sodaaaa!");
        break;
    case 'green':
        console.log("I don't recall having a green soda before.");
        break;
    case 'blue':
        console.log("Blue Cream Sodaaaaaa!");
        break;
    case 'indigo':
        console.log("Indigo Soda?!");
        break;
    case 'violet':
        console.log("Grape Sodaaaaa!");
        break;
    default:
        console.log("I got nothing for that.");

}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

analyzeColor(); {
var response = prompt("Choose a color, any color young lad!");
alert("abra kadabra, you chose " + response);

}

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(percent, total) {
    if(percent === 1) {
        return total - (total * 0.10)
    } else if(percent === 2) {
        return total - (total * 0.25)
    } else if(percent === 3) {
        return total - (total * 0.35)
    } else if(percent === 4) {
        return total - (total * 0.50)
    } else if(percent === 5) {
        return total - total
    } else {
        return total;
    }
}

    console.log(calculateTotal(4, 100));

    /**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

calculateTotal()
var bill = parseFloat(prompt("What was your total bill, kind Sir or Ma'am?"));

alert("Your lucky number is " + luckyNumber);

alert("Your original bill was " + bill);

var discountPrice = calculateTotal(luckyNumber, bill);

alert("After the discount your total is " + discountPrice + "!");

})();