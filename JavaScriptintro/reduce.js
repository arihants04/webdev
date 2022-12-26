const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

console.log(prices.reduce((total, value) => total + value))
let minimum = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;

})

let maximum = prices.reduce((max, price) => {
    if (price > max) {
        return price;
    }
    return max;

})
console.log(minimum);

const evens = [2, 4, 6, 8];

let total = evens.reduce((sum, num) => sum + num, 100);
console.log(total);

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;

    },
    shout: function () {
        setTimeout(() => {
            console.log(this.fullName)
        }, 3000)
    }

}

function greet(person, msg = 'Hey there', punc = '!') {
    console.log(`${msg} ${person}${punc}`)
}

const feline = { legs: 4, family: 'Felidae' };

const canine = { isFurry: true, family: 'caninae' };

function sum(...nums) {
    return nums.reduce((total, curr) => total + curr)
}

function raceResults(gold, silver, bronze, ...everyoneElse) {
    console.log(`Gold medal goes to ${gold}!`)
    console.log(`Silver medal goes to ${silver}!`)
    console.log(`Bronze medal goes to ${bronze}!`)
    console.log(`Participation medal goes to ${everyoneElse}!`)

}

const scores = [123123, 438754385, 27676214, 9999999999, 485858, 37458734];

const [gold, silver, bronze, platinum, ...everyoneElse] = scores

const randomObject = {
    apple: "fruit",
    dog: "animal",
    car: "vehicle",
    sunshine: "weather",
    pencil: "writing instrument"
};

const { apple, dog, car, sunshine: sun, pencil = 'hello' } = randomObject

function fullName({ firstName = 'adada', lastName = 'opsoapospa' }) {
    return `${firstName} ${lastName}`

}