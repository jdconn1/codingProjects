
var loggedIn = false;

while (!loggedIn) {
    let username = prompt('Username');
    let password = prompt('Password');

    if (username == 'samy123' && password == '12345') {
        alert('Welcome back, ' + username);
        loggedIn = true;
    } else {
        alert('Incorrect username or password.');
    }
}