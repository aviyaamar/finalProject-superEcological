import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch , useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderActions'
import Sucess from '../component/Error/Succes'
import Error from '../component/Error/Error'
import Loader from './Loading/Loading'


export default function Checkout({amount}) {
    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.placeOrderReducer)
    const { loading , success , error } = orderstate
    
    function tokenHandler(token){
         console.log(token);
         dispatch(placeOrder(token , amount))
    }

    function validate() {
        if(!localStorage.getItem('currentUser')) {
             window.location.href ='/login'
        }
    }


    return (
        <div>

            {loading && (<Loader/>)}
        
            {success &&( <Sucess success = "Your Order Placed Successfully"/>)}
            {error && (<Error error='Something Went wrong'/>  )}
            
            <StripeCheckout
            token={tokenHandler}
            amount={amount*100}
            shippingAddress
             image
            currency='ILS'
            stripeKey='pk_test_51KOtZqD4qV6Z4BeWPx5VpLTXFXB2F705gpZFztuCUWGWd2yERNbEfiDbi0Ra3NKZOk2KDHVvy4BDjRo87WCsPLak00BrbDvts7'
            >

            <button className="AddTOCart" onClick={validate}>PAY NOW</button>

            </StripeCheckout>

        </div>
    )
}