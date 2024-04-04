//sample program on datatypes
var employeeID=1001;//number
var employeeName="rahul";//string
var employeeSalary="2000000";//salary
var emobileNumber=958686684;//number
var contractEmployee=true;//boolean
var employeepf=null;//null
var medialAllow;//undefined
var enames=["rahul","kiran","tharuni","jyothi","siva"];//Array


var employeeInfo={
    employeeId:2001,
    employeeName:"Kiran",
    employeeMobilenum:7842714641
}

console.log(employeeID);
console.log(employeeName);
console.log(employeeSalary);
console.log(emobileNumber)
console.log(employeepf);
console.log(medialAllow);
console.log(enames);
console.log(employeeInfo);

//how to know datatypes of any field
//typeof
console.log(typeof(employeeID));
console.log(typeof(employeeName));
console.log(typeof(employeeSalary));
console.log(typeof(employeeNumber));
console.log(typeof(employeepf));
console.log(typeof(medialAllow));
console.log(typeof(enames));
console.log(typeof(employeeInfo));

//null,array,object----->object

//advance javascript
//BigInt,symbol
var wiproturnover=BigInt(985885858858858585858858588588858858858588585855);
console.log(typeof(wiproturnover));
var studentName=Symbol("rahul")
var studentName1=Symbol("rahul")
console.log(studentName==studentName1);