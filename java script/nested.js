//nested object
const cart={
    cartId:2001,
    cartWithoffers:"10%",
    products:[
        {
            pid:2001,pname:"lg",price:30000},
            {pid:2002,pname:"samsung",price:40000}
        
    ],
    shippingAdress:{
        adressLine1:"banjarahills",
        adressLine2:"near dmart,hyderbad",
        postalCode:500038
    },
    userInfo:{
        userId:3001,
        Username:"rahul"
    }

}
    console.log(cart.cartId);
    console.log(cart.products[0]);
    //try to get all product values
    //for-of loop
    console.log(cart.shippingAdress.adressLine);
    console.log(cart.uerInfo);
