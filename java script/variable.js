//sample program on variables

    var sal=60000;//local var
    function totalSal()//function 
    {
    var bonous=5000;//local var
    console.log(typeof("sal with bonus:"+(sal+bonous)));

}
totalSal();

console.log(sal);

function totalSal1()
{
    var medialAllow=19800;
    console.log("sal with bonus:"+(sal+medialAllow));
}
totalSal();

//let,const
//block scope
{
    let a=10;
    const b=20;
    console.log(a+""+b);
}
    
//var drawbacks
//drawback1
let productName="Realme";
//let productName="SamSung";
console.log(productName);

//drawback2
for(let i=1;i<=10;i++)
{
    console.log("Realme model:"+i);
}
//console.log("Realme Model:"+i);