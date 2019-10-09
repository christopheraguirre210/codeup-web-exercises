function sum(a,b) {         //warm up for day 2.
    return a + b;
}

console.log(sum(2,2));

// write a function to find the area of a triangle
// this function takes in 3 parameters
function triangleArea(a,b,c) {
    //this variable stores half the perimeter
    var half = (a+b+c)/2;
    //the area is the square root of this
    //function returns the area
    return Math.sqrt(half * (half - a) * (half - b) * (half - c));
}
//console log to see the result
console.log(triangleArea(5, 6, 7));

//write a function that returns the string "Hi"
function sayHi() {
    return "Hi";
}
console.log(sayHi());

//write a javascript function that returns hello plus a name
function sayHello(name) {
    return "Hello " + name + "!";
}
console.log(sayHello("Chris"));

//write a javascript function that returns the first item of an array
function firstItem(arr) {
    return arr[0];
}
console.log(firstItem(["one", "two", "three", "four"]));


//function to find an area of an equilateral triangle

function equilateralTriangleArea(num) {
    return triangleArea(num,num,num);
}
console.log(equilateralTriangleArea(3));
console.log(triangleArea(3,3,3));


//write a javascript function that concatenates three strings and returns the output
function addStrings(a, b, c) {
    return (a + b + c);
}
console.log(addStrings("one", "two", "three"));

//write a javascript function that takes in a string and returns that string with all the characters uppercase
function upperCase(str) {
    return str.toUpperCase()

}

console.log(upperCase());
//write a function that returns the area of a circle when passed the diameter

function areaOfCircle(diam) {
    var rad = (diam / 2);
    return Math.PI * (rad * rad);
}

console.log(areaOfCircle());

// write a function that gets the perimeter of a quadrilateral
function perimeterOfQuadrilateral(a,b,c,d) {
    return a + b + c + d;
}

console.log(perimeterOfQuadrilateral(3, 2, 5, 7));

//write a function that returns the type of argument that was passed in
function checkType(x) {
    return typeof (x);
}

console.log(checkType());

//write a javascript function returns true only when passed a positive, even number.
function posEven(num) {
    return num % 2 === 0 && num > 0;
}

console.log(posEven(3));

//write a javascript function that prompts a user for an input and returns true if the
//number is greater than 5
var num = parseInt(prompt("pick a number any number."));

function moreThanFive(num) {
    return num > 5;
}

console.log(moreThanFive(num));

//write a function that returns the message, "Hello there, stranger." Alert the return from this function. Refactor so that it returns "Hello there, " concatenated to an argument. Prompt
// the user to input a string, call the function, and alert the return. Refactor so that the function has 'stranger' as a default value for the parameter.

function helloThere(string = "stranger") {
    return "Hello there, " + string + ".";
}
var promptedResponse = prompt("Input string, please")
alert(helloThere(promptedResponse))

//branch changes in github
//git branch wed-warmup
/*git branch *enter
git checkout + name of branch
and now you are in a new branch
 */
