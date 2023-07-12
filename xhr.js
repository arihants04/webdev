

req = new XMLHttpRequest();
req.onload = function () {
    console.log("it loaded");
    let response = JSON.parse(this.responseText);
    console.log(response.name, response.height);
}
//function keyword is used because ()=> this refers to entire window object whereas function this refers to this function
req.onerror = function () {
    console.log("error")
    console.log(this)
}
req.open("GET", "https://swapi.dev/api/people/1/");
req.send();

fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("resolved", res);
        return res.json();
    })
    .then(
        (data) => {
            console.log(data)
            return fetch("https://swapi.dev/api/people/2/")
        }
    )
    .then((p2res) => {
        console.log(p2res)
        p2res.json().then((data) => { console.log(data) })
    })
    .catch((e) => {
        console.log("error", e)
    })

const load = async () => {
    try {
        let res = await fetch("https://swapi.dev/api/people/1/")
        let data = await res.json()
        console.log(data);
        let res2 = await fetch("https://swapi.dev/api/people/2/")
        let data2 = await res2.json();
        console.log(data2);
    }
    catch (e) {
        console.log("error", e);
    }
}

axios.get("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("respose: ", res)
    })
    .catch((e) => {
        console.log("error: ", e)
    })

const load2 = async (id) => {
    try {
        let res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data.name);

    }
    catch (e) {
        console.log("error", e);
    }
}
const wait = async () => {
    await load2(1);
    load2(2);
}
wait()

let h1 = document.querySelector("h1");
let h2 = document.createElement("h2")
document.body.appendChild(h2);
const getDadJoke = async () => {
    try {
        let config = { headers: { Accept: 'application/json' } }
        let res = await axios.get("https://icanhazdadjoke.com/", config)
        h2.innerText = res.data.joke;
        console.log(res.data.joke);

    }
    catch (e) {
        console.log("error", e);
    }

}
console.log(h1.innerText);
h1.addEventListener("click",
    getDadJoke
)