const {v4 : uuidv4} = require('uuid')
const stripe = require("stripe")("sk_test_51KOtZqD4qV6Z4BeWnJodermUjDzrJaOV1zUnOh33RITCGsClGerdUvHk20iuQMDAsOqSVBburhieyRQCaEOKZgGD00zXKXVYUJ")
const Order = require('../models/orderModel')
const addPayment = async(req,res)=>{
    const {token, cartItems, currentUser, subtotal}= req.body
   
    const customer = await stripe.customers.create({
        email: token.email, 
        source: token.id
    })
    const payment = await stripe.charges.create({
        amount: subtotal*100, 
        currency : 'ILS' , 
        customer : customer.id , 
        receipt_email : token.email
    }, {
        idempotencyKey: uuidv4()
    })
    if(payment){
        const order = new Order({
            userid : currentUser._id ,
            name : currentUser.name,
            email : currentUser.email ,
            orderItems : cartItems ,
            shippingAddress : {
                address : token.card.address_line1 ,
                city : token.card.address_city,
                country : token.card.address_country,
                postalCode : token.card.addres_zip
            },
            orderAmount : subtotal,
            transactionId : payment.source.id ,
            isDelivered : false


        })
        order.save(err=>{

            if(err)
            {
                return res.status(400).send({ message: 'Something went wrong' });
            }
            else{
                res.send('Order Placed Successfully')
            }

        })
    }
    else{
        return res.status(400).send({ message: 'Payment failed' });
    }
  
}

module.exports = {
   addPayment, 
}