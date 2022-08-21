var ages = [3, 9, 23, 64, 2, 8, 28, 93];

function subtract(input) {
    let a = ages[ages.length - 1];
    let b = ages[0];
    input = a-b;
    return input
}

console.log(subtract(ages));

ages.push(73);

console.log(subtract(ages));

var average = ages.reduce((total, current) => total + current) / ages.length;


console.log(average);


function helloWorld() {
    let statement = 'Hello World!';

    function printHelloWorld() {
        return statement;
    }
}

console.log(helloWorld());

console.log(average);

