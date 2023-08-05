const express = require("express");
const app = express();
let port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})

app.use(() => {
    console.log("We got a new request!")
})

// app.get('/', (req, res) => {
//     res.send("Hello world")
// })