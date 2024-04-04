//if,else,if-else,ladder,switch
 const age = 30;
 const Name ="tharuni";
 if(age>=18)
 {
    console.log("you are eligible for vote");
 }
 else
 {
    console.log("you are not eligible for vote");
 }
  //print today using switch
  //gradebprogram with switch case
  switch (new Date().getDay()) 
  {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:

      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log("Today is:"+day)
  