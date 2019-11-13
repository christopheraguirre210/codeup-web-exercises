const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Exercise #2
let languages = users.filter(function (user) {
    if(user.languages >= 3){
        return user;
    }
});

const multipleLanguages = users.filter(function (obj) {
    return obj.languages.length >= 3;
});
console.log(multipleLanguages);

//Exercise #3

let emails = [];

users.forEach(user => emails.push(user.email));
console.log(emails);

//Exercise #4
const totalYears = users.reduce(function (total,user) {
    return total + user.yearsOfExperience;
},0);

console.log(totalYears);

let yearAverage = totalYears / users.length;
console.log(yearAverage);

//Exercise #5
let longestEmail = emails.reduce((longest,email) => {
    if(email.length > longest.length){
        return email;
    }else {
        return longest;
    }
}, "");

console.log(longestEmail);

//Exercise #6

let instructors = users.reduce((str, user) => {
    return `${str}, ${user.name}`
}, "Your instructors are: david, sophie, vivian, trant") + ".";

console.log(instructors);

// users.forEach((user => names.push(user.name)));
// console.log(names);

