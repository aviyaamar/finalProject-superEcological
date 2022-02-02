import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import './product.css'

export default function Products({ product }) {
  return (
    <div  className="text-left">
      <div>
        <Link to={`product/${product._id}`}>
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
        <div></div>
      </div>
    </div>
  );
}