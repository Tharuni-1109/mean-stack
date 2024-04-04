const empsal=[10000,1000,20000,2000,40000]
empsal.sort((a,b) => a-b);//callback method or compare method
console.log(empsal);
//sort method is not applicable to number
empsal.sort((a,b)=>b-a); 
console.log(empsal);

//spread operator(...)(es6 feature)
const enames=["DEEPAK","tharuni","sujitha","mohan","siva","seshu"];
const empInfo=[...empsal,...enames];
console.log(empInfo);
