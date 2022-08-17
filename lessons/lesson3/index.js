//// a is always 0
//// b is 1
//// c is 2
//// d is 3
//// e is 4
//// f is 5

//// Arrays

// var customerNames = [];
// customerNames.push('Sam Smith');
// customerNames.push('Tommy Guns');

// for (let i = 0; i < customerNames.length; i++){
//     console.log(customerNames[i]);
// }

// for (name of customerNames) {
//     console.log(name);
// }

// Functions

function myFunction () {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}
myFunction ();

function createFullName(firstName, LastName) {
    return firstName + ' ' + LastName;
}

var fullName = createFullName("Joshua", "Conn");

console.log('Welcome, ' + fullName);

//// When naming a function you want to use a verb that describes exactly what the function does.

//Intermediate Arrays

//Map function

// let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas' ];
// let lengths = names.map(function (element) {
//     return element.length;
// });
// console.log(lengths)

// //Reduce funtion

// let sum = lengths.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 10);
// console.log(sum);

// //For Each function

// names.forEach(function(element){
//     console.log(element);
// });

// //Filter function

// let evens = names.filter(function(element) {
//     return element.length % 2 === 0;
// });
// console.log(evens);

// //Splice Function

// let removedElement = names.splice(1, 1);
// console.log(removedElement);



// //Objects

// var dvdPlayer = {
//     height: 3,
//     width: 18,
//     depth: 12,
//     weight: 7,
//     color: 'black',
//     dvdName: 'mulan',
//     printDvdName: function() {
//         console.log(this.dvdName);
//     }
//  };

//  console.log(dvdPlayer.depth);
//  dvdPlayer.printDvdName();


// // Equality vs Identity

// console.log(2 == '2');
// console.log(2 === '2');
// console.log(2 === 2);