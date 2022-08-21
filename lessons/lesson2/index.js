// Conditonal Statements

var firstName = 'Joshua';

if (firstName == 'sam') {
    console.log('Hello Sam!');
} else {
    console.log('Hey, ' + firstName + '!');
}

var costOfMilk = 3;

if (costOfMilk < 2) {
    console.log('We will buy 2 gallons.');
} else if (costOfMilk < 3) {
    console.log('We will buy 1 gallon.');
} else {
    console.log('We will not buy any gallons of milk.');
}

var grade = 'A';

switch (grade) {
    case 'A':
        console.log('90-100');
        break;
    case 'B':
        console.log('80-89');
        break;
    case 'C':
        console.log('70-79');
        break;
    default:
        console.log('0-69');
}

var a = 5;
var b = 6;

if (a == 5) {
    if (b == 6) {
        console.log('a is 5 and b is 6');
    } else {
        console.log('a is 5 but b is not 6.');
    }
}

if (a == 5 && b == 6){
    console.log('a is 5 and b is 6');
}

var ageRequiredToDrive = 16;
var currentAge = 17;

var canPersonDrive = currentAge >= ageRequiredToDrive;
console.log(canPersonDrive);

var ageRequiredToDrive = 16
var currentAge = 16

var canPersonDrive = currentAge >= ageRequiredToDrive;

if (canPersonDrive) {
    console.log('This person can drive.')
} else {
    console.log('This person cannot drive.')
}

var ageRequiredToDrive = 16;
var currentAge = 14;

if (currentAge >= ageRequiredToDrive) {
    console.log('This person can drive!');
} else {
    console.log('This person cannot drive!');
}

var costOfEggs = 2.19;
var eggsToBePurchased = 0;

if (costOfEggs > 3) {
    eggsToBePurchased = 1;
} else if (costOfEggs > 2) {
    eggsToBePurchased = 2;
} else if (costOfEggs > 1) {
    eggsToBePurchased = 3;
} else  {
    eggsToBePurchased = 4;
}
console.log('I will buy ' + eggsToBePurchased + ' dozen eggs.')

// Loops

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('Whatever is next in the code.');
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let names = ['Sam', 'Tom', 'Hillary'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let z = 110;

while (z < 10) {
    console.log(z);
    z++
}

do {
    console.log(z);
} while (z < 10)

for (i in names) {
    console.log(i);
}

for (name of names) {
    console.log(name);
}