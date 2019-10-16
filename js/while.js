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

do{
    var cones_sold = Math.floor(Math.random() * 5) + 1;

    if(allCones > cones_sold){
        allCones -= cones_sold;
        console.log(cones_sold + " cones sold. " + allCones + " remaining.");

    }else if(allCones === cones_sold){
        allCones -= cones_sold;
        console.log(cones_sold + " cones sold. " + allCones + " remaining.");
        console.log("All the cones have been sold.");
        break;

    }else if(allCones < cones_sold){
        console.log("I don't have enough cones to sell you, sorry.");
    }

} while(allCones >= 0);