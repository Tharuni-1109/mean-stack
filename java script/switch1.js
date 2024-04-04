let avg=60;
switch(avg)
{
    case 0:
        console.log("Average marks is : 75");
        break;
       
     case 1:
            console.log("Average marks is :85");
            break;
           
     case 2:
                console.log("Average marks is :50");
                break;
    case 3:
                console.log("Average marks is 30");
                break;
                default:
                console.log("not found");


}
switch(true)
{
    case (avg>=75):
    console.log("grade A")
    break;
    case((avg>60)&&(avg<75)):
    console.log("grade B");
    break;
    default:
        console.log("not eligible");
}