
    do {
        var userMessage = prompt("pick an odd number between 1 and 50");
    } while(userMessage % 2 === 0);
    userMessage = parseFloat(userMessage);
    console.log("You picked " + userMessage);
    for (var i = 0; i <= 50; i++) {
        if (i % 2 !== 0) {
            if(i === userMessage){
                console.log("skipping the number " + userMessage);
                continue;
            }
            console.log(i + " is an odd number");
        }
    }