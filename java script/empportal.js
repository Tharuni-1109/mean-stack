//employeemportal
//Task1
   const eid=2021;
   const  ename="tharuni";
   const Mobilenum=7842714641; 
   //task2
   //salary
     const Salary = (basic,pf,hra) =>
     consttotalSal =Salary(5000,2000,3000);

   //bonus logic 
   console.log("eid is:"+eid);
   console.log("enmae is:"+ename);
   console.log("mobileNumber:"+Mobilenum);
   if(totalSal<=15000)
   {
     let bonous=5000;
     console .log("employee total salary with bonus is:"+bonous)
   }
   else{
    console.log("salary is:"+totalSal);
    console.log("sorry, you are not eligible for bonus")
   }