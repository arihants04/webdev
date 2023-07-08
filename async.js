// async function hello() {
//     throw new Error("OH NO!")
// }
// hello();
const sing = async () => {
    return 'LA LA LA LA'
    throw "error"

}

sing()
    .then((data) => {
        console.log("Promise resolved with: ", data)
    })
    .catch((err) => {
        console.log("OH NO ", err)
    })


const login = async (username, password) => {
    if (!username || !password) throw 'Please enter a username and password!';
    if (password !== 'Fortniteislife') { throw "Incorrect password please try again!" }
    return "Logged in successfully!"
}

login('username', 'Fortniteislife')
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

const colorChange = (color, delay) => {

    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })

}

async function rainbow() {

    await colorChange('red', 1000);
    await colorChange('orange', 1000);
    await colorChange('yellow', 1000);
    await colorChange('green', 1000);
    await colorChange('blue', 1000);
    await colorChange('indigo', 1000);
    await colorChange('violet', 1000);
    return msg = "all done"

}
// rainbow()
//     .then(() => {
//         console.log("rainbow is finished")
//     })

async function endOfRainbow() {
    await rainbow();
    console.log("rainbow is finished", msg);
}
endOfRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand <= 0.5) {
                resolve(`DATA from ${url}`);
            }
            reject("Connection Timeout!");
        }, 1000)

    })
}
async function fakeRequest2() {
    try {
        let data = await fakeRequest('gogle.com');
        console.log(data)
        let data2 = await fakeRequest('gogle.com/page2');
        console.log(data2)
    }
    catch (e) {
        console.log("Error: ", e)
    }
}
fakeRequest2();