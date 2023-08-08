const express = require("express");
const path = require("path")
const app = express();

app.set('views', path.join(__dirname, '/views'))

//still works without this line below!
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("home.ejs")
})

app.listen(3000, () => {
    console.log('listening on port 3000!')
})