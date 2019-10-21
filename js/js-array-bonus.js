/**
 * JS Array Practice
 * Intermediate Array practice: array creation, iteration, and manipulation
 */

var names = ["chris", "jess", "tommy", "melanie"];
var names2 = ["angela", "dwight", "jim", "pam", "michael"];

// Exercise 0. Write a function named first() that returns only the first element of an array

function first(arr){
    return arr[0];
}

console.log(first([1, 2, 3, 4, 5]));

// Exercise 1. Write a function named secondToLast() that returns the second to last element

function secondToLast(arr){
    return arr[arr.length - 2];
}

console.log(secondToLast(names));

// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.

function rest(arr){
    return arr.slice(1);
}

console.log(rest(names));

// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array

function getLongestString(arr){
    var longest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

console.log(getLongestString(names));

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.

function getShortestString(arr){
    var shortest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    }
    return shortest;
}

console.log(getShortestString(names));

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

function addTwoArrays(arr1,arr2){
    return arr1.concat(arr2);
}

console.log(addTwoArrays(names, names2));

// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]

function getUniqueValues(arr){
    var unique = arr.filter((item, i, ar) => arr.indexOf(item) === i);

    return unique;
}

console.log(getUniqueValues(["b", "a", "n", "a", "n", "a", "s"]));

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.

function reverseArray(arr){
    return arr.slice().reverse();
}

console.log(names2);
console.log(reverseArray(names2));

// Exercise 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.

var quotes = ["who knows best?, me!", "if it don't make dollars, it don't make sense", "who loves orange soda?, kel loves orange soda"];
function getRandomQuote(arr){
    return quotes.splice(Math.floor(Math.random() * quotes.length), 1);
}

console.log(getRandomQuote(quotes));

// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"

function getIndexesOf(ltr, word){
    var indexes = [], i = -1;
    while ((i = word.indexOf(ltr, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

console.log(getIndexesOf("a", "bananas"));


// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]



// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers

// Exercise 11. Write a function named getTenFibonacci(n) that returns an array containing the first ten fibonacci numbers

// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]


// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]