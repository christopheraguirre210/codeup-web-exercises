(function() {
    "use strict";
    // TODO: Uncomment next line and get the main header element by id
    var mainHeader = document.getElementById("main-header");

    // TODO: Set inner html of mainHeader to "JavaScript is Cool"

    var listener = function (event) {
        return mainHeader.innerHTML = "JavaScript is cool!";
    };
    document.getElementById("btn1").addEventListener('click', listener, false);

    // TODO: Uncomment the next line and get the sub header element by id
    var subHeader = document.getElementById("sub-header");

    // TODO: Set the text color of subHeader to blue

    var listen = function(event) {
        return subHeader.style.color = "blue";
    };
    document.getElementById("btn2").addEventListener('click', listen, false);

    // TODO: Uncomment the next line and get all list items
    var listItems = document.getElementsByTagName("li");

    // TODO: Set text color on every other list item to grey
    var list = function(event) {
        return listItems[1].style.color = "grey", listItems[3].style.color = "grey";
    };
    document.getElementById("btn3").addEventListener('click', list, false);

    // TODO: Set text color of li with dbid = 1 to blue
    listItems[0].style.color = "blue";

    // TODO: Uncomment the next line and get all elements with class name sub-paragraph
    var subParagraphs = document.getElementsByClassName("sub-paragraph");

    // TODO: Change the text in the first sub paragraph to "Mission Accomplished!"
    var last = function(event) {
        return subParagraphs[0].innerText = "Mission Accomplished!";
    };
    document.getElementById("btn4").addEventListener('click', last, false);

    // var remover = function (event) {
    //     return mainHeader.innerHTML = "JavaScript is cool!";
    // };
    // document.getElementById("btn1").removeEventListener('click', listener, false);
    //
    // var btn5 = document.getElementById("btn5");
    //
    // btn5.addEventListener('click', remover, false);


})();