const express = require("express");
const path = require("path")
const app = express();
const data = require("./data.json")

app.set('views', path.join(__dirname, '/views'))

//still works without this line below!
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("home.ejs")
})
app.get('/rand', (req, res) => {
    let num = Math.floor(Math.random() * 10) + 1;
    res.render("rand.ejs", { num });
})

app.get('/r/:subreddit', (req, res) => {
    let subreddit = req.params.subreddit;
    //let {subreddit} = req.params
    let subdata = data[subreddit];
    res.render("subreddit.ejs", { ...subdata });
})

app.get('/cats', (req, res) => {
    const cats = ['blue', 'monty', 'tom ', 'willson', 'warner'];
    res.render("cats.ejs", { cats });
})


app.listen(3000, () => {
    console.log('listening on port 3000!')
})