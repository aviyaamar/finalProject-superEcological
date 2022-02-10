import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {addFavorite , deleteFromFavorite } from '../../actions/cartActions'
import Checkout from '../../component/Checkout'
import Home from '../Home/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { BiShoppingBag } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import {faHeart} from '@fortawesome/free-solid-svg-icons'



import '../Cart/cart.css'

const Favorite= () =>{
    const heart = <FontAwesomeIcon style={{'height':'40px', 'width':'40px'}} icon={faHeart}/>
    const favoriteReducer = useSelector(state=>state.favoriteReducer)
    const dispatch = useDispatch()
    const {favoriteItems} = favoriteReducer
    const [color, setColor]= useState(["red", "yellow", "blue", "green", "purple", "pink"])

    var subtotal = favoriteItems.reduce((acc , item) => acc + (item.price*item.quantity) , 0) 
    const Trash = <FontAwesomeIcon style={{'height':'20px', 'width':'20px'}} icon={faTrash}/>


    return (
        <div>
            <Home/>
            <div className="detail_Cart">
            <Link className=' flex-end' to='/'>BACK <span><FaArrowRight className='icon'/></span>  </Link>
            <h2 className='text-center-h2'>FAVORITE <span>{heart}</span></h2>
                 <div className="cart">
                          {favoriteItems.map((item)=>{
                            return <div key={item._id} className='productsCart'>
                            <img className='productImage' src={item.image} />
                            <div className='productDetails'>
                                <div className='text'>
                              <h2>{item.name}</h2>
                              <h3>price: {item.price} &#8362;</h3>
                              </div>
        
                           <div className='containerSelect'>
                           <RiArrowDropDownLine className='iconArrow' style={{'height':'40px', 'width':'40px'}}/> 
                                <select className='selectOp' value={item.quantity} onChange={(e)=>{dispatch(addFavorite(item))}}> 
                               
                                    {[...Array(item.countInStock).keys()].map((x , i)=>{
                                          return <option  key={x}value={i+0.5}>{i+0.5}KG</option>
                                    })}
                                
                                    </select>
                                    </div>
                                
                                 {/* <div className='text'> Total: {item.quantity * item.price} &#8362;</div> */}
                                <i style={{color:'red'}} className="far fa-trash-alt" onClick={()=>{dispatch(deleteFromFavorite(item))}}>{Trash}</i> 
                               </div>
                            </div>
                        

                          })}

                     </div>
                    
                
        </div>
        </div>
    )
}
export default Favorite