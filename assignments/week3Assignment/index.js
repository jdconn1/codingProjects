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

var average1 = ages.reduce((total, current) => total + current) / ages.length;

console.log(average1);

function average(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length;
}

console.log(average(ages));

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

var length = names.map(element => element.length);

console.log(average(length));