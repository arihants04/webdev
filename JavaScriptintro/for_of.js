const fruits = ["Banana", "Orange", "Apple", "Mango"];

for (i = 0; i < fruits.length; i++) {
    console.log(`Visit fruit.com/${fruits[i]}`)
}

for (let fruit of fruits) {
    console.log(fruit)
}

for (let char of 'hello world') {
    console.log(char)
}

let ni = {
    asdasdadsadas: 325,
    sdkljfkldklnmk: 34,
    69: 69,
    2342: 420,
    nisdngikngga: 23224224242,
}
let total = 0;
for (score of Object.values(ni)) {
    console.log(score)
    total += score
}