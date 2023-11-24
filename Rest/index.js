const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('views', path.join(__dirname,'views'));

app.set('view engine', 'ejs')

const comments = [
    {username: "Todd",
    comment: "LOL"    
    },
    {username: "Walt",
    comment: "So funny"    
    },
    {username: "Nolan",
    comment: "Haha"    
    },
    {username: "Mark",
    comment: "Hilarous!!"    
    },

]

app.get('/comments',(req,res)=>{
    res.render('comments/index');
})

app.get('/tacos',(req,res)=>{
    res.send("GET response for /tacos")
})


app.post('/tacos',(req,res)=>{
const {tacotype,qty} = req.body;
res.send(`Here is ${qty} ${tacotype} tacos`);
})

app.listen(3000,()=>{
    console.log("On port 3000!");
})