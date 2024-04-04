//employee details are
//eid,ename
//esal:basic,pf,hra
//total sal
//total sal<=20000
//bouns = 5000;
//total sal=25000;

let details = {
    eid:"A101",
    ename:"roopa",
    basic:1000,
    pf:3000,
    hra:3000
}
function totalsal(basic,pf,hra,bouns)
{
    if((basic-pf+hra)<=20000)
    {
        console.log("Total sal is:"+(basic-pf+hra+bouns));
    }
    else
    {
        console.log("Without bonous is:"+(basic-pf+hra));
    }

}
totalsal(19000,3000,3000,5000);

let detail = {
    eid:"A64",
    ename:"roopa",
    basic:1000,
    pf:3000,
    hra:3000
}

const detail1 = (eid,ename,basic,pf,hra,bouns) => {
    if((basic-pf+hra)<=20000){
        console.log("with bouns:"+(basic-pf+hra+bouns));
    }
    else{
        console.log("without:"+(basic-pf+hra));
    }
}
detail1("AD4","roopa",19000,3000,3000,5000);
    
    