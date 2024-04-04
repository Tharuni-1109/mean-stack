//asynchronous execution

//to get data from a file
import fs from "fs";
console.log("first");
//if one function as a parameter to another function
//i.e callback()

fs.readFile("aboutdiet.txt",//arrow function
(err,data) => {
if(data)
{
    console.log(data.toString());

}
else{
    console.log(err);
}
})
console.log("third");