const express = require("express");
const app = express();
let port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})

app.use((req, res) => {
    console.log("We got a new request!");
    res.send("<h1>Response<h1>");
    // res.send({ color: 'red' });
})