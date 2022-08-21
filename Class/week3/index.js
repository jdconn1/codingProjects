function cookInMicrowave(food, seconds) {
    return "Microwaving " + food + " for " + seconds + " seconds.";
}

var food = cookInMicrowave("meat", 70);
console.log(food);

var test = cookInMicrowave("Gary", 300);
console.log(test);

function randomeForLoop () {
    for (let i = 0; i <= 100; i++) {
        console.log(i)
    }
}

console.log(randomeForLoop());

function runRace (riggedWinner, riggedLoser) {
    var runners = [riggedWinner]
        runners.push("Tom");
        runners.push("Sally");
        runners.push("Bob");
        runners.push("Gary");
        runners.push("Natalie");
        console.log("runners", runners);

        runners[0] = riggedWinner;
        var loser = runners[runners.length -1]

        alert(riggedWinner + " won the race!");
        alert(riggedLoser + ' lost the race.')

        var message = ""
    
        for (let i = 0; i < runners.length; i++) {
        message += (i + 1) + " - " + runners[i] + "\n"
        }alert(message)    
}

runRace('Natalie', 'Joshua')




