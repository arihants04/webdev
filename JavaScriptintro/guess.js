let maxNumber = parseInt(prompt('Welcome! Enter your max number:'))
while (!maxNumber) {
    maxNumber = parseInt(prompt('Enter a valid number!'));
}
randInt = Math.floor(Math.random() * maxNumber) + 1
let guess = parseInt(prompt('enter your first guess:'))
let x = 1

while (!guess) {
    guess = parseInt(prompt('Enter a valid number!'));
}
while (parseInt(guess) !== randInt) {
    x++;
    if (guess === 'quit') break;
    if (guess < randInt) {
        guess = prompt(`Too Low! Try Again! Guess #${x} `)
    }
    else {
        guess = prompt(`Too High! Try Again! Guess #${x} `)
    }
}
if (guess !== 'quit') {
    alert(`Congratulations! You took ${x} attempts!`)
}