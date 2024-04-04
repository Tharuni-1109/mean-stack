//user payment
const didpayment=true;
const payment=new Promise((resolve,reject)=>{
    if(didpayment)
    {
        resolve();
    }
    else{
        reject();
    }
});
payment.then(()=>{
    console.log("payment success")
}).catch(()=>{
    console.log("payment failed")
})

//shipping address
Promise
//cart
Promise
//app() method promise are execute at a time