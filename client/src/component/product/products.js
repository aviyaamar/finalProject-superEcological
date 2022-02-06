import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import {addToFavorite} from '../../actions/cartActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faHeart} from '@fortawesome/free-solid-svg-icons'

import './product.css'

 function Products({ product }) {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }
  function addToFavorite(){
    dispatch(addToFavorite(product,quantity))
  }
  const heart = <FontAwesomeIcon style={{'height':'20px', 'width':'20px'}} icon={faHeart}/>
  return (
    <div  className="container">
      <div className="text-left" >
        <Link className="text-details" to={`product/${product._id}`}>
         <div className='text-center'>
         <img src={product.image} className="img-fluid" style={{'width':'150px' ,'height':'150px'}} />
         </div>
         <div className="titles">
         <button className="heart" onClick={addToFavorite}>{heart}</button>
         <h1>{product.name}</h1>
          <h3>Price : {product.price} <span>&#8362;  KG</span></h3>
         </div>
          
        </Link>
        <div className="quan">
          <div  className="quantity">
        {/* <h1>Select Quantity</h1> */}
        <select className="selectQuan"
        value={quantity}
        onChange={(e) => {
        setquantity(e.target.value);
        }}
         >
        {[...Array(product.countInStock).keys()].map((x, i) => {
         return <option value={i + 0.5}>{i + 0.5}kg</option>;
         })}
         </select>
         
         </div>
        {product.countInStock > 0 ? (<button className="AddTOCart" onClick={addtocart}> ADD TO CART</button>) : (
        <div>
          <h1>Out Of StocK</h1>
       <button className="AddTOCart" disabled onClick={addtocart}>ADD TO CART</button></div>)}
      </div>
        </div>
      </div>
  );
}
export default Products
