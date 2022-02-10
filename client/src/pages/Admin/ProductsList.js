import Api from '../../Api/Api'
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {  deleteProduct } from '../../actions/productActions'
import Home from '../Home/Home'

import { RiProductHuntLine } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import './productList.css'


const ProductsList = () => {
  const dispatch = useDispatch()
  const getallproductsstate = useSelector(state =>state.getAllProductsReducer)
  const {products , loading , error} = getallproductsstate
  const [productsMap, setProducts]= useState([])
  const [newLisProduct, setNewListProduct]= useState([])

  const getProducts = async()=>{
    const response = await Api.get('products')
    setProducts(response.data)
    console.log(response.data);
  }
 
  useEffect(()=>{
    getProducts()
  },[])

  const displayData = () =>{
    return productsMap.map((product)=>{
      return <div className='product' key={product._id}>
        <img className='imageProduct' src={product.image} alt={product.name}/>
        <div><h4>Name:{product.name}</h4> </div>
        <div><h4>PRICE:{product.price}</h4> </div>
        <div>STOCK:{product.countInStock} </div>
        <div>BARCODE:{product._id} </div>
        
        <button className='buttonProdu' onClick={()=>{dispatch(deleteProduct(product._id))}}><AiOutlineDelete className='icon iconProduct'/></button>
        <Link to={`/admin/editproduct/${product._id}`}><i className="fas fa-edit"><GrDocumentUpdate className='icon iconProduct'/></i></Link>
      </div>
    })

  }

  return (
    <div>
     <Home/>
        <h2 className='text-center-h2'>PRODUCT LIST <span><RiProductHuntLine/></span></h2>
        <div className='product-List'>
          {displayData()}
         </div>
         </div>
    );
};

export default ProductsList;
