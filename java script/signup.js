//javascript logic(coments)
//action can be implement with functions
function validate()
{
     //request data gathering logic
     var Name =document.signup.Name.value;
     var pwd = document.signup.pwd.value;
    var confirmpwd =document.signup.Confirmpwd;
    var  Gender=document.signup.Gender.value;
    var number=document.signup.mobilenumber.value;
    var DOB=document.signup.DOB.value;
    var Adress=document.signup.Adress.value;
    var Qualification=document.signup.Qualification.value;
    var Skills=document.signup.Skills.value;
    var Shift=document.signup.Shift.value;
    var resume=document.resume.value;
}
//validation logic
if(Name=="")
{
 alert("boss...please enter name!!!");
 return false;
}
//validation logic
if(pwd=="")
{
 alert("boss...please enter pwd!!!");
 return false;
}
//validation logic
if(confirmpwd=="")
{
 alert("boss...please enter confirmpwd!!!!");
 return false;
}
 if(Gender=="")
 {
  alert("boss...please enter gender!!!");
  return false;
 }
 //validation logic
 if(number=="")
 {
  alert("boss...please enter mobilenumber!!!");
  return false;
 }
 //validation logic
 if(DOB=="")
 {
  alert("boss...please enter DOB!!!");
  return false;
 }
 //validation logic
 if(Qualification=="")
 {
  alert("boss...please enter Qualification!!!");
  return false;
 }
 //validation logic
 if(Skills=="")
 {
  alert("boss...please enter Skill!!!");
  return false;
 }
 //validation logic
 if(Shift=="")
 {
  alert("boss...please enter preferedshift!!!");
  return false;
  //validation logic
  if(resume=="")
  {
   alert("boss...please enter Uploadyourresume!!!");
   return false;
  }
   return true;
}