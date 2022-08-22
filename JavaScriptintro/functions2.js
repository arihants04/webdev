function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}


function repeat(repeatingPhrase, repeatCount) {
    for (let i = 0; i < parseInt(repeatCount); i++) {
        console.log(repeatingPhrase)
    }
}


function bankRobbery() {
    const heroes = ['spiderman', 'superman', 'sentry', 'silver surfer']
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PlEASE HELP US, ${hero.toUpperCase()}`)
        }
    }
    cryForHelp()
}

function callTwice(passedInFucntion) {
    passedInFucntion();
    passedInFucntion();
}
function callTenTimes(passedInFunction) {
    for (let i = 0; i < 10; i++) {
        passedInFunction();
    }
}
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

function makeMysteryFunc() {
    const randInt = Math.floor(Math.random() * 2) + 1
    if (randInt === 1) {
        return function () { console.log('You Win!!') }
    }
    else {
        return function () { alert('You Lost') }
    }
}
const mystery = makeMysteryFunc()
mystery()


function makeBetweenFunc(min, max) {
    return function between(inputValue) {
        return (inputValue < max && inputValue > min)
    }
}

const myMath = {
    pi: 3.13159265359,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    },
}

const square = {
    area(num) {
        return num * num
    },
    perimeter(num) {
        return num * 4
    },
}

