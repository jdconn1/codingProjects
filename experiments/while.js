let guessRight = false;

while(!guessRight) {
    let guess = prompt("Guess a fruit.");

    if (guess == 'pineapple' || guess == 'Pineapple') {
        alert('Nice guess, you got it right!');
        guessRight = true;
    } else {
        alert('Wrong fruit, try again! Hint: The fruit is considered prickly.');
    }
}