const express = require("express");
const fs = require('fs');
 
const v = require('./verif');

const app = express();

const PORT = 6400;


// setting the view engine to ejs
app.set('view engine', 'ejs')


app.get('/',v, (req, res) =>{
    fs.readFile("./views/Homepage.ejs", 'utf8', (err,data)=>{
        err ? res.end('FILE NOT FOUND')&& console.error(err) :res.end(data);
    })
})


const userRouter = require("./routes/route");
app.use("/",userRouter);




app.listen(PORT,(err) => 
{
    err ? console.log(err) : console.log(`this server is running on port ${PORT}...`)

})