//import express from 'express':/esc7
const express = require('express');//es6
const bodyparser = require('body-parser');
const app = express();

//connect to frontend
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/"+"login.html");
})

//middleware logic
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}))

//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000");
})

//dynamic logic
app.post("/process",(req,res)=> {
    //request data gathering logic
    const uname = req.body.username;
    const pwd = req.body.password;
    const Gender = req.body.Gender;
    const Address = req.body.Address;
    const Qualification = req.body.Qualification;



//buisness logic
if((uname=="login")&&(pwd == "login123"))
{
    res.end(uname+"welcome to diet world");
}
else{
    res.end(uname+"please check details once");
}
})
