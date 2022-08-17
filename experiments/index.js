points = 0;
pointsReset = false;


for (i = 0; i , 100 && points < 290; i++) {
    if (points == 125 && pointsReset === false) {
        points = 25;
        pointsReset = true;
} else if (i % 2 === 0) {
    points+= 5;
} else {
    points+=3;
} console.log("Turns: " + i + " Score: " + points);
}