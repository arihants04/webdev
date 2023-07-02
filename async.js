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