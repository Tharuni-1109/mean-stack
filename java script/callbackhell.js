//user payment
const didpayment=true;
const payment=()=>{
    console.log("your payment success");

}
const userpayment=(didpayment,callback)=>{
    if(didpayment)
    {
        callback();

    }
    else{
        userpayment();
        if(didpayment)
    {
        callback();
    }
            else{
                userpayment();
            if(didpayment)
            {
                callback();
            }
            else{
                 userpayment();
                 if(didpayment)
                 {
                    callback();
                 }
                 else{
                    userpayment();
                 }//else3
            }//else2

        }//else1
    }//function closing
}
    userpayment(didpayment,payment);
