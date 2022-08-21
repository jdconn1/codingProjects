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

function average() {
    for (let i = 0; i < ages.length; i++) {
    var total = ages[i];
} var average = total / ages;
}

console.log(average());
