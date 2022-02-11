import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addFavorite} from '../../actions/cartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RiArrowDropDownLine } from "react-icons/ri";

import {faHeart} from '@fortawesome/free-solid-svg-icons'

import './product.css'
import '../../pages/Cart/cart.css'


 function Products({ product }) {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const [active, setActive] = useState(false)
  

  const toggel = () =>{
    setActive(!active)
  }

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }
  
  function addlev() {
    dispatch(addFavorite(product, quantity));
    
  }
  const changeColor = active ? '073a31' : 'grey'
 
  const heart = <FontAwesomeIcon onClick={()=>toggel()} style={{color: changeColor, 'height':'20px', 'width':'20px'}} icon={faHeart}/>
  return (
    <div  className="container">
      
      <div className="text-left" >
      <button className="heart" onClick={addlev}> {heart}</button>
        <div className="text-details" to={`product/${product._id}`}>
          {product.isAvailable == true ?( <img src={product.image} className="img-fluid" style={{'width':'150px' ,'height':'150px'}} />):(
             <img style={{filter:'invert(100%)'}} src={product.image} className="img-fluid" style={{'width':'150px' ,'height':'150px'}} />
          )} 
      

         <div key={product._id} className='text-center'>
         {/* <img src={product.image} className="img-fluid" style={{'width':'150px' ,'height':'150px'}} /> */}
         </div>
         <div className="titles">

         <h1>{product.name}</h1>
          <h3>Price : {product.price} <span>&#8362;  KG</span></h3>
         </div>
          
        </div>
        
    
        <div className="quan">
          <div  className="containerSelect">
          <RiArrowDropDownLine className='iconArrow' style={{'height':'40px', 'width':'40px'}}/> 
        <select className="selectOp"
        value={quantity}
        onChange={(e) => {
        setquantity(e.target.value);
        }}
         >
        {[...Array(product.countInStock).keys()].map((x, i) => {
         return <option key={x} value={i + 0.5}>{i + 0.5}kg</option>;
         })}
         </select>
   
     
         </div>
        {product.isAvailable ===  true ? (<button className="AddTOCart" onClick={addtocart}> ADD TO CART</button>) : (
        <div>
          <h5 className="out">OUT OF STOCK</h5>
       <button className="AddTOCart" disabled onClick={addtocart}>ADD TO CART</button></div>)}
    
      </div>
        </div>
      </div>
  );
}
export default Products
