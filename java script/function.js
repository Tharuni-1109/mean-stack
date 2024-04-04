//syntax
function Show ()
{
    console.log("welcome to full stack development")
}
Show();

//function with parameter
function add(a,b)//parameters
{
    console.log("sum is:"+(a+b));
}
add(10,20);//arguments

//function with returnvalue
function mul(a,b){
    return a*b;
}
const res=mul(10,20);
console.log("rescis:"+res);

//es6
//arrow functions
//(),=>(fat arrow),statements
//arrow function without parameters
const result = ()=>{
console.log("welecome folks!!!");
}
result();
//without block
const result1 = () =>
console.log("welecome folks!!!");
result1();

//arrow function with parameters
const  result2=(a,b)=>
console.log("sum is:"+(a+b));
result2(20,30);
//arrow function with return value
const result3=(a,b)=>{
    return a*b;

}
const finalresult=result3(10,20);
console.log("final result is:"+finalresult);

//return value without block
const result4=(a,b)=>a*b;
const fresult=result4(30,40);
console.log("fresult is:="+fresult);

//...(rest paremeters)
const result5=(a,b,c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
}
result5(10,20,30,40,50,60,70);//we have use only last perameter

//default parameter
const addres=(a,b=10)=>a+b;
console.log(addres(10,20));
console.log(addres(10));