//import express from 'exprees';//es7
const express=require('express');
const app=express();

//connect to front end method
app.get("/sign",(req,res)=>{
    res.sendFile(__dirname+"/"+"sign.html");//gobal object __dirname
});

//sever logic
app.listen(4000,()=>{
    console.log("sever running on port 4000!!!");
});

//dynamic logic
app.get("/process",(req,res)=>{
    //request data gathering logic
    const uname = req.query.username;
    const pwd = req.query.password;

//business logic
if((username="admin")&&(password="admin123"))
{
    res.end(uname+"rahul thankyou for registration with us");

}
else{
res.end(uname+"please check details once");
}


})
