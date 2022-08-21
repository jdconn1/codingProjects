
// var numberOfCats = prompt("How many cats do you have.");
// console.log('They have ' + numberOfCats + ' cats.')
// let areYouACatDoctor = prompt("Are you a cat doctor?") // "yes" or "no"


// if (numberOfCats > 10 && areYouACatDoctor === "no") {
//     alert("Adequate.");
// } else if (numberOfCats >= 5 && areYouACatDoctor === "no") {
//     alert("You have a lot of cats.")
// } else if (numberOfCats < 2) {
//     alert("That's too few, your need more cats.");
// } else {
//     alert("That's a great number of cats.");
// }

// let guess = "";

do {
    guess = prompt("Guess a fruit!");
    if (guess !== "pineapple") {
        alert("Wrong fruit!")
    }
} while (guess !== "pineapple")
alert("You guessed right!");

// for (numberOfCats = numberOfCats; numberOfCats < 20; numberOfCats++) {
//     alert("Here's a cat!!");
// }
// alert("You now own an adequate number of cats.")