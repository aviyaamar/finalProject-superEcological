import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import Rating from "react-rating";
import './product.css'

export default function Products({ product }) {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }
  return (
    <div  className="text-left">
      <div>
        <Link key={product._id} to={`product/${product._id}`}>
         <div className='text-center'>
         <img src={product.image} className="img-fluid" style={{'width':'200px' ,'height':'200px'}} />
         </div>
          <h1>{product.name}</h1>

          <Rating
            style={{ color: "orange" }}
            initialRating={product.rating}
            emptySymbol="fa fa-star-o fa-1x"
            fullSymbol="fa fa-star fa-1x"
            readonly={true}
          />

          <h1>Price : {product.price}</h1>
        </Link>
        <div>
        <h1>Select Quantity</h1>

<select
  value={quantity}
  onChange={(e) => {
    setquantity(e.target.value);
  }}
>
  {[...Array(product.countInStock).keys()].map((x, i) => {
    return <option value={i + 1}>{i + 1}</option>;
  })}
</select>

<hr />

{product.countInStock > 0 ? (
  <button className="btn btn-dark" onClick={addtocart}>
    ADD TO CART
  </button>
) : (
 
    <div>

      <h1>Out Of StocK</h1>
      <button className="btn" disabled onClick={addtocart}>
      ADD TO CART
   
  </button>
    </div>
)}
</div>

<hr />

        </div>
      </div>
    
  );
}
