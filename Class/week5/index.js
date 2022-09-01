// // Classes

// class Student {
//     constructor(firstName, lastName, phoneNumber, grade) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.phoneNumber = phoneNumber;
//         this.grade = grade;
//     }
//     introduction () {
//         console.log(`${this.firstName} ${this.lastName}, ${this.grade}, and can be reached at ${this.phoneNumber}.`);
//     }
// }

// let student = new Student('Dean', 'Winchester', 7608492152, "has been held back since 6th grade");
// let student1 = new Student('Sam', 'Winchester', 7606580666, 'has a bachelors in daemonology' );

// student.introduction();
// student1.introduction();

// // Inheritance

// class NotificationSender {
//     constructor(status) {
//         this.status = status;
//     }
//     sendNotification(Notification) {
//         console.log("Sending: " + Notification);
//     }
//     findUserWithStatus(status) {
//         let user = getUser(status);
//         return user;
//     }
// }

// class PomotionSender extends NotificationSender {
//     constructor(status) {
//         super(status);
//     }
//     calculateDiscount(status) {
//         if (status === "GOLD") {
//             return .3;
//         }else if (status === "SILVER") {
//             return .15;
//         }
//         return 0;
//     }
// }


// class CollectionSender extends NotificationSender {
//     constructor(status) {
//         super(status);
//     }
//     calculateFee(status) {
//         if (status === "OVERDUE"){
//             return 10;
//         } else if (status === "DELIQUENT") {
//             return 25;
//         }
//         return 5;
//     }
// }

// let collectionSender = new CollectionSender("OVERDUE");
// collectionSender.sendNotification("This is a test collections notification");
// console.log(collectionSender.calculateFee("OVERDUE"));

// // Try and catch blocks.

// try {
//     list.push("Hello.")
// } catch (err) {
//     console.log(err);
// }

// console.log("Goodbye.");


// Menu App

class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    describe() {
        return `${this.name} plays ${this.position}`
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }
    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }
    describe() {
        return `${this.name} has ${this.players.length} players.`
    }
}


class Menu {
    constructor() {
        this.teams = [];
        this.selected = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createTeam();
                    break;
                case "2":
                    this.viewTeam();
                    break;
                case "3":
                    this.deleteTeam();
                    break;
                case "4":
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }

            selection = this.showMainMenuOptions();
        }

        alert("Goodbye!");
    }
    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create Team
        2) View Team
        3) Delete Team
        4) Display All Teams
        `);
    }

    showTeamMenuOptions(teamInfo) {
        return prompt(`
        0) Back
        1) Create Player
        2) Delete Player
        ----------------
        ${teamInfo}
        `);
    }

    displayTeams() {
        let teamString = "";
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ") " + this.teams[i].name + "\n"
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt("Enter name for new team:");
        this.teams.push(new Team(name));

    }

    viewTeam() {
        let index = prompt("Enter the index of the team you wish to view:");
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = "Team Name: " + this.selectedTeam.name + "\n";

            for(let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ") " + this.selectedTeam.players[i].name + 
                " - " + this.selectedTeam.players[i].position + "\n";
            }
            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case "1":
                    this.createPlayer();
                    break;
                case "2":
                    this.deletePlayer();
            }
        }
    }

    deleteTeam() {
        let index = prompt("Enter the index of the team you wish to delete:");
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

    createPlayer() {
        let name = prompt("Enter name for new player:");
        let position = prompt("Enter position for new player:");
        this.selectedTeam.players.push(new Player(name, position));
    }
    deletePlayer() {
        let index = prompt("Enter the index of the player you wish to delete:");
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start();