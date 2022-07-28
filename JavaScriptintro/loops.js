for (let i = 1; i <= 500; i++) {
    console.log(i)
}

for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}

for (let i = 100; i >= 0; i -= 10) {
    console.log(i)
}

for (i = 2; i <= 2048; i = i ** 2) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`i is ${i}`)
    for (let j = 1; j <= 3; j++) {
        console.log(`          j is ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    let row = seatingChart[i]
    console.log(`Row #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}