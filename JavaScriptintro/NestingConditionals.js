const userInput = prompt('Please enter a desired password')
if (userInput.length < 6) {
    console.log('Not enough characters')
}
else if (userInput.includes(' ')) {
    console.log('Password may not contain a space. Only numerical, alphabetical, and special characters')
}
else {
    console.log('Password is acceptable')
}

let age = 20
if (age >= 0 && age < 5 || age > 65 && age <= 120) {
    console.log('You may enter for free')
}
else if (age >= 5 && age < 10) {
    console.log('You are a child. You pay 10$')
}
else if (age >= 10 && age <= 65) {
    console.log('You are a adult. You pay 20$')
}
else {
    console.log('Invalid age entered')
}