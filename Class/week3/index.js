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


// From the instructor


let users = [
    {
      id: 0,
      username: "abby324",
      isAdmin: false
    },
    {
      id: 1,
      username: "mcp23",
      isAdmin: true
    },
    {
      id: 3,
      username: "derek55",
      isAdmin: false
    }
  ]

console.log(users[1].username)
  


function cookInMicrowave(food, seconds) { // var food = "taco"; var seconds = 30
    var cookedFood = "microwaving " + food + " for " + seconds + " seconds!"
    return cookedFood;
}

var burrito = cookInMicrowave("burrito", 60)
console.log(cookedFood)

var taco = cookInMicrowave("taco", 30)
console.log(taco)



function sayHello(name) {
    alert("Hello " + name + "!")
}

sayHello("Dakota")



function runRiggedRace(riggedWinner, riggedLoser) {
    var runners = [riggedWinner]

    //runners.push(riggedWinner)

    runners.push("Simone")
    runners.push("Bob")
    runners.push("Alicia")

    //runners.unshift(riggedWinner)
    //runners.splice(0, 0, riggedWinnter)
    
    // Replaces the first place winner with the rigged winner
    // runners[0] = riggedWinner;

    //runners.splice(runners.length, 0, riggedLoser)
    runners.push(riggedLoser)

    console.log("runners", runners)

    var winner = runners[0]
    alert(winner + " won the race!")

    var loser = runners[runners.length - 1]
    alert(loser + " lost the race!")

    var message = ""

    for(let i = 0; i < runners.length; i++) {
        message += (i + 1) + " - " + runners[i] + "\n"
        //message = message + (i + 1) + " - " + runners[i] + "\n"
    }

    alert(message)
}

runRiggedRace("Natalie", "The Worst Person")



