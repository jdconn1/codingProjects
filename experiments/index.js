// points = 0;
// pointsReset = false;


// for (i = 0; i , 100 && points < 290; i++) {
//     if (points == 125 && pointsReset === false) {
//         points = 25;
//         pointsReset = true;
// } else if (i % 2 === 0) {
//     points+= 5;
// } else {
//     points+=3;
// } console.log("Turns: " + i + " Score: " + points);
// }

var array1 = [1, 2, 3, 4, 5, 67, 89, 72, 83];
var array2 = [3, 4, 73, 45, 7896, 91];

function function1(input) {
    input = input[input.length -1]
    return input;
}

function function2(input) {
    for (i = 0; i < input[input.length - 1]; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
  return input;
}

console.log(function1(array1));

console.log(function1(array2));
console.log(function2(array2));


let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function testFunc(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr.splice(i, 1)
    }
    return arr;
}

console.log(testFunc(testArr));

function points(games) {
    let sum = 0;
    for (let i = 0; i < games.length; i++) {
      if (games[i][0] > games[i][2]) {
        sum += 3;
      } else if (games[i][0] == games[i][2]) {
        sum += 1;
      }
    }
    return sum;
  }

  let pointArr = ['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']

  console.log(points(pointArr));