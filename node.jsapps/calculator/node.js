//es7 style
import express from'express';
import path from 'path';
import {fileURLtopath} from 'url';
const app=express();
//global object logic
const __filename=fileURLtopath(import.meta.url);
const __dirname=path.dirname(__filename);

//connect to frontend
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/"+"calculator.html")
})
//server logic
app.listen(4000,() =>{
    console.log("server running on the port 4000");
})

//middlewar logic
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//dynamic logic
app.post("/operation",(req,res)=> {
    //request data gathering logic
    const num1=parseInt(req.body.firstval);
    const num2=parseInt(req.body.secondval);
    const btnval=req.body.calc;

    //business logic
    if(btnval=="Add")
    {
        res.end("add is:"+(num1+num2));

    }
    else if(btnval=="sub")
    {
        res.end("sub is: "+(num1-num2));

    }
    else if(btnval=="mul")
    {
        res.end("mul is:"+(num1*num2));
    }
    else
    {
        res.end("div is:"%(num1%num2));
    }
});


