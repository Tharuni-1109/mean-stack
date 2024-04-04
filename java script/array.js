//ways to create array
//1.literal syntax
const stunames=["tharuni","suji","mohan","siva","deepu"];
//2.object synatx
const enames=new Array("konda","madhu","mani","nalini");
//recommended one is literal syntax
//to retrive all the array element
//for-of
for(let sname of stunames)
{
    console.log(sname);
}
//forEach() method
//callback methods
stunames.forEach((value) => {
    console.log(value);
})
//how to add elements
//push,//unshift//splicemethod
stunames.push("pallavi");
console.log(stunames);
stunames.unshift("mouni");
console.log(stunames);
stunames.splice(3,0,"nithin","avinash");
console.log(stunames);

//how to remove elements from an array
//pop()
stunames.pop();
console.log(stunames);
stunames.shift();
console.log(stunames);
stunames.splice(4,2);
console.log(stunames);
delete stunames[2];//
console.log(stunames);

//sorting
//sort(),reverse()
console.log(stunames.sort());
console.log(stunames.reverse());

//how to get portion of an array
//slice()
console.log(stunames.slice(3));
console.log(stunames.slice(2,4));//inclusive
console.log(stunames.slice(-4,-2));//4-2=2

//to search specific array element
//indexof(),lastIndexof(),include()
console.log(stunames.indexOf("vamsi"));
console.log(stunames.lastIndexOf("madhu"));
console.log(stunames.includes("tharuni"));

console.log(stunames.flat("deepu"));
console.log(stunames.join("mohan"));
console.log(stunames.concat(enames));
console.log(stunames.copyWithin(2,0));
console.log(stunames.flat());
const Numbers=[1,2,3,4];
const doubleNumbers=Numbers.map(Numbers=>Numbers*2);
console.log(Numbers);
console.log(doubleNumbers);
Numbers.sort(()=> Math.random());
console.log(Numbers);
console.log("original Array:",Numbers);
console.log(stunames.length);
console.log(stunames.toString());
console.log(stunames.concat(enames));
console.log(stunames.at(2));
console.log(stunames.join("*"));
console.log(stunames.copyWithin(3,0));
console.log(stunames.map( (any) => any+any));
console.log(stunames.find( (item) => item === "mohan"));
console.log(stunames.findIndex( (item) => item === "suji"));
console.log(stunames.some( (item) => item === "tharuni"));
console.log(stunames.every( (item) => item === "siva"));
console.log(stunames.fill("tharuni",2,5));
const demo = "1234";
console.log(Array.from(demo));
console.log(Array.isArray(stunames));




