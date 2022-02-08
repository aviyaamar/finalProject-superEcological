import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart , deleteFromCart } from '../../actions/cartActions'
import Home from '../Home/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


const Favorite = () => {
    const cartreducerstate = useSelector(state=>state.cartReducer)
    const dispatch = useDispatch()
    const {cartItems} = cartreducerstate

    var subtotal = cartItems.reduce((acc , item) => acc + (item.price*item.quantity) , 0) 
    const Trash = <FontAwesomeIcon style={{'height':'20px', 'width':'20px'}} icon={faTrash}/>


    return (
        <div>
            <Home/>
            <div className="detail_Cart">
                 <div className="col-md-8 card text-center shadow p-3 mb-5 bg-white rounded">
                     <div>
                     <h2 className='text-center m-5'>MY CART</h2><span><Link className='AddTOCart' to='/'>continue shopping</Link></span>
                     </div>
                     <table className='table table-bordered table-responsives-sm'>
                      <thead>
                      <tr>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Quantity</th>
                           <th>Total Price</th>
                           <th>Delete</th>
                           <th>Image</th>
                       </tr>
                      </thead>

                      <tbody>

                          {cartItems.map(item=>{

                            return <tr>
                                <td>{item.image}</td>
                                <td>{item.name}</td>
                                <td>{item.price} &#8362;</td>
                                <td><select value={item.quantity} onChange={(e)=>{dispatch(addToCart(item , e.target.value))}}>
                                    
                                    {/* {[...Array(item.countInStock).keys()].map((x , i)=>{

                                          return <option value={i+0.5}>{i+0.5}KG</option>

                                    })} */}
                                    
                                    </select></td>
                                <td>{item.quantity * item.price} &#8362;</td>
                                <td><i style={{color:'red'}} className="far fa-trash-alt" onClick={()=>{dispatch(deleteFromCart(item))}}>{Trash}</i> </td>
                            </tr>

                          })}

                      </tbody>

                     </table>
                     <h2 className='text-center'>SubTotal : {subtotal} &#8362;</h2>   
                     {/* <Checkout amount={subtotal}/> */}
                 </div>
            </div>
        </div>
    )
}

export default Favorite