//import express from 'express':/esc7
const express = require('express');//es6

const app = express();

//connect to frontend
app.get("/votercard",(req,res)=>{
    res.sendFile(__dirname+"/"+"votercard.html");
})

//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000");
})

//dynamic logic
app.get("/process",(req,res)=> {
    //request data gathering logic
    const uname = req.body.username;
    const age = req.body.age;


//buisness logic
if(age >= 18)
{
    res.end(username+"congratulations! you are eligible");
}
else{
    res.end("sorry, you are not");
}
})