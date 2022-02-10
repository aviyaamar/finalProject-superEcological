import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts  } from '../../actions/productActions';
import Products from '../../component/product/products';
import Loader from '../../component/Loading/Loading'
import Error from '../../component/Error/Error'


import Filter from '../../component/Filter/Filter';
import Home from '../Home/Home'
import './Train.css'



const Train = () => {
    const getallproductsstate = useSelector((state) =>state.getAllProductsReducer);
  
      const { loading, products, error } = getallproductsstate;  
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(getAllProducts());
        
        
      }, []);
 
     
     

      return (
        <div className="App">
          <Home/>
          {/* <div className="video-responsive">
          
          <iframe width="560" 
          height="315" 
          src="https://www.youtube.com/embed/HaxLDp0NXIo?start=1"
           title="YouTube video player" 
           frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            />
  </div> */}
);
          <Filter/>
          <div className='products'>
            {loading ? (<Loader/>) : error ? (<Error error="Something went wrong"/>) : (
               products.map(product=>{
                   return <div className='' key={product._id} >
                       <Products product={product}/>
                   </div>
               })
            )}
          </div>
       
        </div>
      );
    }


export default Train;
