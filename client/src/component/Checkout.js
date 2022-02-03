import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch , useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderActions'
export default function Checkout({amount}) {

    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.placeOrderReducer)

    const { loading , success , error } = orderstate
    function tokenHandler(token)
    {
         console.log(token);
         dispatch(placeOrder(token , amount))
    }

    function validate()
    {
        if(!localStorage.getItem('currentUser'))
        {
             window.location.href ='/login'
        }
    }

   

    return (
        <div>

            {loading && (<h1>Loaddin..</h1>)}
        
            {success &&( <h1>'Your Order Placed Successfully'</h1>)}
            {error && (<h1>'Something Went wrong'</h1>  )}
            
            <StripeCheckout
            token={tokenHandler}
            amount={amount*100}
            shippingAddress
            currency='ILS'
            stripeKey='pk_test_51KOtZqD4qV6Z4BeWPx5VpLTXFXB2F705gpZFztuCUWGWd2yERNbEfiDbi0Ra3NKZOk2KDHVvy4BDjRo87WCsPLak00BrbDvts7'
            >

            <button className="btn" onClick={validate}>PAY NOW</button>

            </StripeCheckout>

        </div>
    )
}