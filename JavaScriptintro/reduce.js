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