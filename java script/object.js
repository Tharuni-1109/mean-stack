const employeeInfo={//object
    eid:1010,//propertyname:propertyvalue
    ename:"tharuni",//key,value
    esal:30000
}
console.log(employeeInfo.eid);
console.log(employeeInfo["eid"]);
//for-in
for(let employee in employeeInfo)
{
    console.log(employeeInfo[employee]);
}
//object with functions
//this keyword is used to show curent objects
//this not working with arrow function
const personInfo={
    firstName:"deepak",
    lastName:"vesly",
     fullName:function(){
        return this.firstName+" "+
        this.lastName;

    }
}
console.log(personInfo.fullName());
//what is this
//this keyword,used to represent current
//rent object
//this is not works with aroow function
Object.keys(employeeInfo).forEach((key)=>{
    console.log(key+":"+employeeInfo[key]);

})
//what is foreach
//what is callback function
//if we try to write one function withinn another function
//function i,e callback function
Object.entries(employeeInfo).forEach(
    (entry)=>{
        console.log(entry[0]=""+entry[1]);
    });
    Object.values(employeeInfo).forEach((val)=>{
        console.log(val);
    })
