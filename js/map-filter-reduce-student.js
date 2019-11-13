"use strict";


//A callback function === numbers.forEach(function(element){
// }); ----- using numbers array from below.
/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];

// let newArray = [];
//     numbers.forEach(function (number) {
//     newArray.push(number + 1);
// });
// console.log(newArray);

let newArray = numbers.map(function (num) {
    return num * 2;
});

//or let newArray = numbers.map(num => num * 3);

// console.log(newArray);

//TO DO TOGETHER: Let's map through the array of number and add 1 to each
// element. Console log the new copy of the array.

//TO DO: Map through the new array of numbers and this time multiply each
// element by 3. Console log the new copy.

let thisArray = newArray.map(num => num * 3);

// console.log(thisArray);


/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];

// TO DO TOGETHER: Let's filter through our binary and return all the true
// values. We'll store the new array in a variable named 'ones'

// let ones = binary.filter(function (num) {
//     return num == true;
// });

let ones = binary.filter(num => num == true);

// console.log(ones);

// TO DO: filter through binary again and this time, return all the false
// values.

// let zeros = binary.filter(function (num) {
//     return num == false;
// });

let zeros = binary.filter(num => num == false);

// console.log(zeros);

const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TO DO: filter through the array of objects and return all fruit type
// objects.

let fruits = fruitsAndVeggies.filter(function (fruit) {
    return fruit.type === "fruit";
});
// console.log(fruits);

// TO DO: filter through the array of objects and return all vegetable type
// objects.

let vegetables = fruitsAndVeggies.filter(function (vegetable) {
    return vegetable.type === "vegetable";
});

// console.log(vegetables);

/*********************************************
 *              .reduce
 ******************************************** */


const numbersArray = [1, 2, 3, 4, 5];





// TO DO TOGETHER: Let's reduce our original numbers Array into one single
// value.

const sum = numbersArray.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);

const add  = (accumulation, currentNumber) => accumulation + currentNumber;
const start = 0;

const otherSum = numbersArray.reduce(add,start);

// console.log(otherSum);

// console.log(sum);

// TO DO: Using .reduce, subtract all numbers in the numbers Array from a
// starting point of 100.

// const difference = numbersArray.reduce((total, currentNumber) => {
//     return total - currentNumber;
// }, 100);

const difference = numbersArray.reduce((total, currentNumber) => total - currentNumber, 100);

// console.log(difference);

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
        oranges: 12,
        grapes: 10
    }
];

// TO DO: Using .reduce, return the total number of apples.

const totalApples = shoppingCarts.reduce(function (total,cart) {
    return total + cart.apples;
},0);

// console.log(totalApples);

// TO DO TOGETHER: let's use .reduce to return an object that has properties
// representing total values for each fruit.


const colors = ['red','orange','red','blue','blue','green','red'];

// TO DO: Count the number of times a color appears in this Array. Hint:
// your initial value should be an empty object.

const colorCount = colors.reduce(function (colorCount, color) {
    if(typeof colorCount[color] === "undefined"){
        colorCount[color] = 1;
    } else {
        colorCount[color] += 1;
    }
    return colorCount;
},{});
//^^ is the initial empty object, whatever is placed there is where the result will show up i.e a string, an array or like here, an object//

// console.log(colorCount);


const lyrics = ['we','all','live','in','a','yellow','submarine'];

//TO DO TOGETHER: Using reduce, let's turn this into a string.
const oneLine = lyrics.reduce(function (currentString, word) {
    return `${currentString} ${word}`
},"");
// console.log(oneLine);

// Bonus: Create an Array of all the unique fur colors!
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

const unique = [...new Set(hamsters.map(hamster => hamster.fur))];

console.log(unique);
