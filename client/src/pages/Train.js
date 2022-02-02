import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts  } from '../actions/productActions';
import Products from '../component/product/products';
import { addToCart } from "../actions/cartActions";
import Api from '../Api/Api'
import '../App.css'
import Filter from '../component/Filter';

// import Api from '../Api/Api'
// import axios from 'axios';

const Train = () => {
    const getallproductsstate = useSelector(
        (state) =>state.getAllProductsReducer
      );
    
      const { loading, products, error } = getallproductsstate;
    
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(getAllProducts());
      }, []);
 
     
     

      return (
        <div>
          <Filter/>
          <div >
            {loading ? (
              <h1>loadin...</h1>
            ) : error ? (
              <h1>Something went wrong...</h1> 
            ) : (
               products.map(product=>{
                   return <div className='products' key={product._id} >
                       <Products product={product}/>
                   </div>
               })
            )}
          </div>
       
        </div>
      );
    }


export default Train;
