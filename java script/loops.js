//to disaply multiple products
//for
for(let i=1;i<=10;i++)
{
    console.log("realme model:"+i);
}
//while
let j=1;
while(j<=10)
{
    console.log("samsung model:"+j);
    j++;
}

//do-while
let k = 1;
do{
    console.log("del model:"+k);
    k++;
}while(k<=10);
//advance loop(es6)
//for-of,for-in
//for-of is used to  get elements from an array
const products=["realme","dell","samsung","lenovo"];
for(let product of products)
{
    console.log(product);
}
/*for-in loop is used to get elements from 
an objects*/
const employeeInfo={
    eid:1001,
    ename:"tharuni",
    esal:30000
};
for(let employee in employeeInfo)
{
    console.log(employeeInfo[employee]);
}
//for loop

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    console.log(product);
}

