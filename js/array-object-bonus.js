"use strict";

//Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.

function filterNumbers(arr){
    var newArray = [];
    for(var i = 0;i < arr.length;i++){
        if(typeof arr[i] === 'number'){
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
        breed: "Mastiff",
        age: 10
    }
];

console.log(dogs);

function getOlder(arr,index){
    dogs.forEach(function (dog,index) {
        dogs[index].age += 1;
    })
}

//Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false.

var cars = [
    {
        make: "Volvo",
        color: "red",
        year: "1996",
        isDirty: true
    },
    {
        make: "Toyota",
        color: "black",
        year: "2004",
        isDirty: false
    },
    {
        make: "Ford",
        color: "white",
        year: "2007",
        isDirty: true
    }
];

console.log(cars);

function washCars(arr){
    cars.forEach(function (car,index) {
        cars[index].isDirty = false;
    })
}

//Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

var admins = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];

console.log(admins);

function adminList(admins){
    var adminArray = [];
    admins.forEach(function(admin,index) {
        if (admins[index].isAdmin === true){
             adminArray.push(admin);
        }
    });
    console.log(adminArray);
}

//to change from an array to objects above just remove .email and just return admin!!!

//Create a function, makeSandwichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.





