const express = require("express");
const app = express();
let port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})

// app.use((req, res) => {
//     console.log("We got a new request!");
//     res.send("<h1>Response<h1>");
//     // res.send({ color: 'red' });
// })

app.get('/', (req, res) => {
    console.log("homepage request")
    res.send("<h1>Homepage<h1>")
})

app.get('/about', (req, res) => {
    console.log("about request")
    res.send("<h1>About us!<h1>")
})
app.get('/contact', (req, res) => {
    console.log("contact request")
    res.send("<h1>Our phone number is 816-774-2293!<h1>")
})
app.post('/', (req, res) => {
    console.log("post request")
    res.send('<h1>Post reqest on homepage<h1>')
})
app.get("*", (req, res) => {
    res.send("Unkown Patway 404")
})

//fetch("http://localhost:3000/", { method: "POST" })