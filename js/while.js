// var i = 1;
//
// while (i < 65536) {
//     i = i * 2
//     console.log(i);
// }

// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// var customer = Math.floor(Math.random() * 5) + 1;

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Total cones available to sell: " + allCones);


do {
    var customer = Math.floor(Math.random() * 5 + 1);

    if(allCones > customer){
        allCones -= customer;
        console.log(customer + " cones sold." + allCones + " cones left to sell.");

    } else if(allCones === customer){
            allCones -= customer;
            console.log(customer + " cones sold." + allCones + " cones left to sell.");
            console.log("Yay! I sold them all!");
            break;

    }   else if(allCones < customer){
                console.log("I don't have enough cones to sell you.");
            }

}while(allCones >= 0);