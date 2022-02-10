import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart , deleteFromCart } from '../../actions/cartActions'
import Checkout from '../../component/Checkout'
import Home from '../Home/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { BiShoppingBag } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";



import './cart.css'

export default function Cartscreen() {
    const cartreducerstate = useSelector(state=>state.cartReducer)
    const dispatch = useDispatch()
    const {cartItems} = cartreducerstate
    const [color, setColor]= useState(["red", "yellow", "blue", "green", "purple", "pink"])

    var subtotal = cartItems.reduce((acc , item) => acc + (item.price*item.quantity) , 0) 
    const Trash = <FontAwesomeIcon style={{'height':'20px', 'width':'20px'}} icon={faTrash}/>


    return (
        <div>
            <Home/>
            <div className="detail_Cart">
            <Link className=' flex-end' to='/'>BACK <span><FaArrowRight className='icon'/></span>  </Link>
            <h2 className='text-center-h2'>CHECK OUT <span>   <BiShoppingBag /></span></h2>
                 <div className="cart">
                          {cartItems.map((item)=>{
                            return <div key={item._id} className='productsCart'>
                            <img className='productImage' src={item.image} />
                            <div className='productDetails'>
                                <div className='text'>
                              <h2>{item.name}</h2>
                              <h3>price: {item.price} &#8362;</h3>
                              </div>
        
                           <div className='containerSelect'>
                           <RiArrowDropDownLine className='iconArrow' style={{'height':'40px', 'width':'40px'}}/> 
                                <select className='selectOp' value={item.quantity} onChange={(e)=>{dispatch(addToCart(item , e.target.value))}}> 
                               
                                    {[...Array(item.countInStock).keys()].map((x , i)=>{
                                          return <option key={x} value={i+0.5}>{i+0.5}KG</option>
                                    })}
                                
                                    </select>
                                    </div>
                                
                                 <div className='text'> Total: {item.quantity * item.price} &#8362;</div>
                                <i style={{color:'red'}} className="far fa-trash-alt" onClick={()=>{dispatch(deleteFromCart(item))}}>{Trash}</i> 
                               </div>
                            </div>
                        

                          })}

                     </div>
                     <div className='payment'>
                     <h2 className='text-center'>SubTotal : {subtotal} &#8362;</h2>   
                     <Checkout amount={subtotal}/>
                     </div>
                
        </div>
        </div>
    )
}