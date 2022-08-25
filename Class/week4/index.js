// function isJose(user) {
//     return user.username === "jose";
// }

// const isJose = (user) => {
//     return user.username === "jose";
// }

// const notJose = user => {
//     return user.username === "jose";
// }

// const definitelyNotJose = user => user.username === "jose";

// The code above is the progression of how to use an arrow function
// with one parameter and one line of code.


const cookIngredients= (cookIngredients) => {
    const ingredients = ["flour", "butter", "milk", "cheese"];
    let result = ingredients.forEach(ingredients => ingredients += "in the microwave");
    return result
}

console.log(cookIngredients());
