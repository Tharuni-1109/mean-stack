//http protocol
import http from"http";
//server logic
http.createServer((req,res) =>{
    res.end("Welcome to node.js world!!!!!");
}).listen(4000);

console.log("sever running on port 4000!!!!!");