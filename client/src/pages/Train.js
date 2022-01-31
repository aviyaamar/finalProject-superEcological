import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts  } from '../actions/productActions';
import Products from '../component/products';
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
          <div className="row justify-content-center mt-5 ml-2 mr-2">
            {loading ? (
              <h1>loadin...</h1>
            ) : error ? (
              <h1>Something went wrong...</h1> 
            ) : (
               products.map(product=>{
                   return <div key={product._id} className='col-md-3 m-2 p-2 shadow p-3 mb-5 bg-white rounded card'>
                       <Products product={product}/>
                   </div>
               })
            )}
          </div>
        </div>
      );
    }


export default Train;
