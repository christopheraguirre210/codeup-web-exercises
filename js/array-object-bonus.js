"use strict";

//Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.

function filterNumbers(arr){
    var newArray = [];
    for(var i = 0;i < arr.length;i++){
        if(typeof arr[i] == 'number'){
            return newArray.unshift(arr[i]);
        }
    }
    console.log(newArray.sort(a - b));
}




// Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.

var dogs = [
    {
        name: "Chomper",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

function getOlder(arr){
    for(var i = 0;i < arr.length;i++){
        if(arr[i] === dogs.age){
            return arr[i] + 1;
        }
    }
};




