//express module
const express =require("express");      //this is es6 feature
const app=express();

//connect to html
app.get("/calculator",(req,res) =>{
    res.sendFile(__dirname+"/"+"calculator.html");
})


//server logic
app.listen(4000,() =>{
    console.log("server running on the port 4000");
});


//dynamic logic
app.get('/process',(req,res) =>{
    //request data gathering logic
    const fnum=Number(req.query.FIRSTNUMBER);
    const snum=Number(req.query.SECONDNUMBER);
    const op=req.query.operation;
    
//BUSINESS LOGIC

if(op=="SUM"){
    res.end(op +" is "+(fnum+snum) );

}else if(op=="SUB"){
    res.end(op +" is "+(fnum-snum));
}else if(op=="MUL"){
    res.end(op +" is "+(fnum*snum));
}
else if(op=="DIV"){
    res.end(op +"  is "+(fnum/snum));

}else{
    res.end("check once")

}
})
    