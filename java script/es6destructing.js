//array destructing
const empInfo = ["sathvik",30,97483993];
const[ename,age,mobilenumber] = empInfo;
console.log(ename);
console.log(age);
console.log(mobilenumber);

///object destructing
const productInfo={
    pid:1001,
    pnames:"realme",
    price:30000

}
const{pid,pname,price}=productInfo;
console.log(pid);
console.log(price);
console.log(pname);

//object.assign()
const user={
    uid:1001,
    uname:"rahul"

}
//clone
const user1=Object.assign({},user);
console.log(user1);