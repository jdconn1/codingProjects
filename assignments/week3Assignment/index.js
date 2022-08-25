// 1.
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

// 2.

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

var length = names.map(element => element.length);

console.log(average(length));

for (var i = 0; i < names.length; i++) {
    console.log(names.join(' '));
}

// 3. To access the last element in an array you use array.length -1.
// 4. To access the first element in an array you call the array like so array[0]. Since the array is in
// the 0 base the first element will always be 0.

// 5.

var nameLengths = []

var length2 = names.map(element => element.length);

length2.forEach(element=> nameLengths.push(element));

console.log(nameLengths);

// 6.

sum = 0;
for ( let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

console.log(sum);

// 7.

function returnWordXTimes(word, number) {
    var result = '';
    for (let i = 0; i < number; i++) {
        result += word;
    } return result;
}

console.log(returnWordXTimes(`Wow 
- Owen Wilson.
 `, 10));




