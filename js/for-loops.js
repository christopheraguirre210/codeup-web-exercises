function showMultiplicationTable(input){
    for(var i = 1; i <= 10; i++){
        console.log(input + " x " + i + " = " + input * i);
    }
}
showMultiplicationTable(7);


// for (var i = 1; i <= 10; i++){
//     var rand = Math.floor(Math.random() * 180) + 20;
//     if(rand % 2 === 0){
//         console.log(rand + " is even");
//     } else{
//     console.log(rand + " is odd");
//  }
// }


// for(var i = 1; i <= 9; i++) {
//     console.log(("" + i).repeat(i));
// }

// for(var i = 100; i >= 5; i-=5){
//     console.log(i);
// }