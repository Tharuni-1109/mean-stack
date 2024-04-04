//javascript logic(coments)
//action can be implement with functions
function validate()
{
    //request data gathering logic
   var email= document.loginform.email.value;
   var pwd=document.loginform.pwd.value;
   var qualification=document.loginform.qualification.value;
   var gender=document.loginform.gender.value;

   //validation logic
   if(email=="")
   {
    alert("boss...please enter email!!!");
    return false;
   }
   if(pwd=="")
   {
    alert("boss please enter pwd!!!");
    return false;
   }
   if(qualification="select")
   {
    alert("boss...please enter Qualification!!!!")
    return false;
   }
   if(gender=="")
   {
    alert("boss please enter gender")
    return false;
   }
   return true;
}
 