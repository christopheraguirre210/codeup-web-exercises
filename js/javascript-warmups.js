// JavaScript warm-ups for #DEIMOS
//
// function sum(a,b) {         //warm up for day 2.
//     return a + b;
// }
//
// console.log(sum(2,2));
//
// // write a function to find the area of a triangle
// // this function takes in 3 parameters
// function triangleArea(a,b,c) {
//     //this variable stores half the perimeter
//     var half = (a+b+c)/2;
//     //the area is the square root of this
//     //function returns the area
//     return Math.sqrt(half * (half - a) * (half - b) * (half - c));
// }
// //console log to see the result
// console.log(triangleArea(5, 6, 7));
//
// //write a function that returns the string "Hi"
// function sayHi() {
//     return "Hi";
// }
// console.log(sayHi());
//
// //write a javascript function that returns hello plus a name
// function sayHello(name) {
//     return "Hello " + name + "!";
// }
// console.log(sayHello("Chris"));
//
// //write a javascript function that returns the first item of an array
// function firstItem(arr) {
//     return arr[0];
// }
// console.log(firstItem(["one", "two", "three", "four"]));
//
//
// //function to find an area of an equilateral triangle
//
// function equilateralTriangleArea(num) {
//     return triangleArea(num,num,num);
// }
// console.log(equilateralTriangleArea(3));
// console.log(triangleArea(3,3,3));
//
//
// //write a javascript function that concatenates three strings and returns the output
// function addStrings(a, b, c) {
//     return (a + b + c);
// }
// console.log(addStrings("one", "two", "three"));
//
// //write a javascript function that takes in a string and returns that string with all the characters uppercase
// function upperCase(str) {
//     return str.toUpperCase();
//
// }
//
// console.log(upperCase("cats"));
// //write a function that returns the area of a circle when passed the diameter
//
// function areaOfCircle(diam) {
//     var rad = (diam / 2);
//     return Math.PI * (rad * rad);
// }
//
// console.log(areaOfCircle());
//
// // write a function that gets the perimeter of a quadrilateral
// function perimeterOfQuadrilateral(a,b,c,d) {
//     return a + b + c + d;
// }
//
// console.log(perimeterOfQuadrilateral(3, 2, 5, 7));
//
// //write a function that returns the type of argument that was passed in
// function checkType(x) {
//     return typeof (x);
// }
//
// console.log(checkType());
//
// //write a javascript function returns true only when passed a positive, even number.
// function posEven(num) {
//     return num % 2 === 0 && num > 0;
// }
//
// console.log(posEven(3));
//
// //write a javascript function that prompts a user for an input and returns true if the
// //number is greater than 5
// var num = parseInt(prompt("pick a number any number."));
//
// function moreThanFive(num) {
//     return num > 5;
// }
//
// console.log(moreThanFive(num));
//
// //write a function that returns the message, "Hello there, stranger." Alert the return from this function. Refactor so that it returns
// // "Hello there, " concatenated to an argument. Prompt
// // the user to input a string, call the function, and alert the return. Refactor so that the function has 'stranger' as a default value for the parameter.
//
// function helloThere(string) {
//     return "Hello there, " + string + ".";
// }
// var promptedResponse = prompt("Input string, please");
// alert(helloThere(promptedResponse));
//
//
// //write a javascript function that accepts an array and returns the length of that array
//
// function newArray(arr){
//     return arr.length;
// }
//
// console.log(newArray([1,2,3,4,5]));
//
// //write a javascript function that returns the quotient of the two numbers, but only when passed two numbers.It
// //should return false in all other cases
//
// function quotient(a,b){
// if(typeof a === 'number' && typeof b === 'number') {
//     return a / b;
//  } else {
//     return false;
//  }
// }
//
// console.log(quotient(24, 6));

//write a javascript function that takes in an array that has a length of 5. console log each element of the array

// function logArray(arr){
//     console.log(arr);
//     console.log(arr[0]);
//     console.log(arr[1]);
//     console.log(arr[2]);
//     console.log(arr[3]);
//     console.log(arr[4]);
// }
//
// console.log(logArray([1,2,3,4,5]));
//
//
// //write a javascript function that takes in an input and returns true if the input is a string at least 8 characters in length. It should return false for all other input
//
// function longString(str){
//     if(str.length <= 8){
//         console.log("please enter a string with at least 8 characters");
//     } else {
//         console.log("thank you!");
//     }
// }
//
// // return typeof str === "string" && str.length >= 8;
//
// console.log(longString("abbazabb"));


//write a function that takes in a floating point number and returns a number rounded down. it should return false for all inputs that arent numbers


// function roundDownNum(num){
//     if(num == 'number'){
//         return Math.floor(num);
//     } else {
//         return false;
//     }
// }
//
// console.log(roundDownNum(3.4));

// function roundDownFloat(num){
//     if(typeof num === 'number' && !isNaN(num)){
//         return Math.floor(num);
//     }else{
//         return false;
//     }
// }

//write a function that cou ts from 1 to the number that the user passes in. For example if the argument passed in is 10, the function should log numbers 1 through 10

// function countNumber(num){
//     for(var i = 1; i <= num; i++){
//         console.log(i);
//     }
//     return "Done counting";
// }

// console.log(countNumber(10));


//write a function called createPersonObject that takes in a name (that is a string) and an age (that is a number) and returns a person object containing the name and age.

//
// function createPersonObject(name,age){
//     var personObject = {};
//     personObject.name = "Chris";
//     personObject.age = 30;
//
//     return personObject;
// }
//
// console.log(createPersonObject());
//
//
// function fizzBuzz(num){
//     for(var i = 1; i <= num; i++){
//         if(i % 15 === 0){
//             console.log("fizzbuzz");
//         }else if(i % 5 === 0){
//             console.log("buzz");
//         }else if(i % 3 === 0){
//             console.log("fizz");
//         }else{
//             console.log(i);
//         }
//     }
// }
//
// console.log(fizzBuzz(100));

//write a function that will return the number 5, but only when passed the string "five"

function numFive(five){
    if(five === 'five'){
        return 5;
    }
}

console.log(numFive('five'));

//write a function that will return the shopping cart object with the most oranges

var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 8,
        grapes: 10
    }
];

function mostOranges(carts){
    carts.forEach(function (cart) {
        var winner = {};
        if(cart.oranges > winner.oranges){
            winner = cart;
        }
        return winner;
    })
}

