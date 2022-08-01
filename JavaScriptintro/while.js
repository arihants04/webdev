let count = 0;
while (count <= 10) {
    console.log(count)
    count++
}

const Secret = 'BabyHippo';

let guess = prompt('Enter the secret code')
while (Secret.toString() !== guess.toString()) {
    guess = prompt('Try again ):')
}
console.log('Congratulations!!!')


let userInput = prompt('Say something')
while (true) {
    userInput = prompt(userInput)
    if (userInput === 'quit') break;
}
console.log('You win!')