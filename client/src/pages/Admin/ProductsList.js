import Api from '../../Api/Api'
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {  deleteProduct } from '../../actions/productActions'


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

  // const deleteProduct = async(_id)=>{
  //   try{
  //     console.log(_id);
  //     console.log(products);
  //     await Api.post('products', _id)
  //     const newList = products.filter((item) =>item._id !== _id);
  //     setNewListProduct(newList)
  //     console.log(newList);
  
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }

  const displayData = () =>{
    return productsMap.map((product)=>{
      return <div key={product._id}>
        <div>Name:{product.name} </div>
        <div>Name:{product.price} </div>
        <div>Name:{product.countInStock} </div>
        <div>Name:{product._id} </div>
        <img src={product.image} alt={product.name}/>
        <button  onClick={()=>{dispatch(deleteProduct(product._id))}}>Delete</button>
        <Link to={`/admin/editproduct/${product._id}`}><i className="fas fa-edit">update</i></Link>
      </div>
    })

  }

  return (<div>
    {displayData()}
    </div>);
};

export default ProductsList;
