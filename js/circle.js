(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            var area = Math.PI * Math.pow(circle.radius, 2);

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding) {
                console.log(Math.round(circle.getArea()));
            } else {
                return circle.getArea;
            }
                // If doRounding is true, round the result to the nearest integer.
                // Otherwise, output the complete value

                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    var circle2 = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            var area2 = Math.PI * Math.pow(circle2.radius, 2);

            return area2; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding) {
                console.log(Math.round(circle2.getArea()));
            } else {
                return circle2.getArea;
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circle2.getArea());

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle2.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle2.logInfo(true);
})();
