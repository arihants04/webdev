console.log('Hello World')
let number = prompt()
number = parseInt(number)
if (number === 6) {
    console.log("Number is 3!")
}

let coin = Math.floor(Math.random() * 2) + 1

if (coin === 1) {
    console.log('Heads')

}
else {
    console.log('Tails')
}
const dayOfWeek = prompt().toLowerCase()
if (dayOfWeek === 'monday') {
    console.log('today is monday')
} else if (dayOfWeek === 'saturday') {
    console.log('today is saturday')
} else if (dayOfWeek === 'friday') {
    console.log('today is friday')
}
else {
    console.log('It is a nice day')
}