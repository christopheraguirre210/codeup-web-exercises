"use strict";
console.log("Welcome to Intro to Objects!");

// var rubberDuck = new Object();
//
// rubberDuck.color = "yellow";
// rubberDuck.role = "Emotional support";
// rubberDuck.name = "Cody";
//
// console.log(rubberDuck);
//
// var redCup = new Object();
//
// redCup.color = "red";
// redCup.role = "Need help";
// redCup.amount = 1;
//
// console.log(redCup);
//
// var greenCup = {
//     color: "green",
//     role: "Good to go",
//     name: "Greenie"
// };
//
// console.log(greenCup);



/*********************************************
 *              INTRO TO OBJECTS
 ******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TO DO TOGETHER: Create a new variable (of type Object) and call it
 * 'myPhone'. Use either the constructor or Object literal notation.
 */
//initialize new object with object literal notations
var myPhone = {

};

/**
 * TO DO: Create a new Object and call it 'myMac'. use either the
 * constructor or Object literal notation.
 */

var myMac = {

};

/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

//assign properties to myPhone
myPhone.model = "Galaxy S10";
myPhone.color = "Black";
myPhone.storage = "132G";

console.log(myPhone);

/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

//assign properties to myMac
myMac.model = "MacBook Air";
myMac.size = "13in";
myMac.year = 2019;

console.log(myMac);

/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

//create Object property in myPhone
myPhone.name = {
    firstName: "Christopher",
    lastName: "Aguirre"
};


myPhone.apps = ["instagram", "slack", "facebook"];

console.log(myPhone.apps[2]);

console.log(myPhone.name.lastName);
/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

myMac.folders = ["codeup", "music", "pictures", "coolstuff"];

console.log(myMac);

function myApps(){
    console.log("These are my apps:");
    myMac.folders.forEach(function (folder) {
        console.log(folder);
    });
}

/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */

myMac.login = {
    username: "yadda",
    fakePassword: "yadda",
    email: "my email dot com"
};

console.log(myMac.login);

//add users to myMac

myMac.users = [
    {
        username: "chris",
        id: 1
    },
    {
        username: "andrew",
        id: 2
    },
    {
        username: "albert",
        id: 3
    }
];
console.log(myMac.users);
console.log(myMac.users[1].username);

//var myArray = ["cat", "dog", "rabbit"];
//myArray.forEach(function(element,index,array){
//console.log(element); logs the animals in the array
//console.log(index); logs the index number of the animals in the array
//console.log(array); logs out the entire array

myMac.users.forEach(function (user) {
    console.log(user.username);
});

/*********************************************
 *                  METHODS
 ******************************************** */
console.log(myPhone);
console.log(myMac);
/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

myPhone.call = function(){
    console.log("Dialing ...");
};
console.log(myPhone);

/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

myMac.powerOn = function(){
    console.log("Powering on...");
};

/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

myPhone.currentUser = function(){
    console.log("Current user: " + this.name.firstName + " " + this.name.lastName);
};

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */

myMac.currentUser = function(){
    console.log("Current user: " + this.login.username + "|" + this.login.email);
};


/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */

