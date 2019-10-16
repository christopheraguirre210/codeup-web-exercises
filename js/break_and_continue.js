prompt("pick a number between 1 and 50");

for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    } else if (i === 27) {
        console.log("Yikes! we're skipping the number " + i);
    }
    console.log("Here is an odd number: " + i);
}