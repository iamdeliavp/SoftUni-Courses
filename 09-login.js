function login(input) {

let username = input[0];
let password = username.split('').reverse().join('');

let currentPassAttempt = 1;
for(let i = 1; i <= input.length; i++) {
    let guessedPass = input[i];
    if(guessedPass === password) {
        console.log(`User ${username} logged in.`); break;
    }

if (currentPassAttempt === 4) {
    console.log(`User ${username} blocked!`);
    break;
}
console.log(`Incorrect password. Try again.`)

currentPassAttempt++;
}
}
login(['sunny','rainy','cloudy','sunny','not sunny']);