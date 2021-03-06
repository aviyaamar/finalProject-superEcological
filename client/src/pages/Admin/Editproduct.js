import React from 'react';
import { getProductById, updateProduct } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Loader from '../../component/Loading/Loading'
import Error from '../../component/Error/Error'
import Succes from '../../component/Error/Succes'

import Home from '../Home/Home';
import './Editproduct.css'
import { BiEdit } from "react-icons/bi";

const Editproduct = ({match}) => {
  const dispatch = useDispatch();
  const productstate = useSelector((state) => state.getProductByIdReducer);
  const { product, error, loading } = productstate;

  const updateproductstate = useSelector((state) =>state.updateProductReducer)
  const {success , updateerror , updateloading} = updateproductstate

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [countinstock, setcountinstock] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [isAvailable, setisAvailable]= useState(true)

  useEffect(() => {
    if (product) {
      if (product._id == match.params.productid) {
        setname(product.name);
        setprice(product.price);
        setdescription(product.description);
        setimageurl(product.image);
        setcategory(product.category);
        setcountinstock(product.countInStock);
        setisAvailable(product.isAvailable)
      } else {
        dispatch(getProductById(match.params.productid));
      }
    } else {
      dispatch(getProductById(match.params.productid));
    }
  }, [dispatch, product]);

  function editproduct(e) {
    e.preventDefault();
    const updatedproduct = {
      name: name,
      price: price,
      description: description,
      countInStock: countinstock,
      category: category,
      image: imageurl,
      isAvailable: isAvailable
    };

    dispatch(updateProduct(match.params.productid, updatedproduct));
  }

  return (
    <div>
      <Home/>
      <div>
      <h2 className='text-center-h2'>Edit Product <span><BiEdit className='icon'/></span></h2>
    
      {loading && <Loader />}

      {updateloading && <Loader />}
      {updateerror && (<Error error='Something went wrong'/> )}
      {success && (<Succes success='Product Updated Successfully'/>)}
      {error && <Error error="something went wrong"/>}
      <div className='container'>
      {product && (
       
          <form className='form-update' onSubmit={editproduct}>
            <input
              type="text"
              className="form-input"
              placeholder="name"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-input"
              placeholder="price"
              value={price}
              required
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-input"
              placeholder="decription"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-input"
              placeholder="imageurl"
              value={imageurl}
              onChange={(e) => {
                setimageurl(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-input"
              placeholder="category"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-input"
              placeholder="count in stock"
              value={countinstock}
              onChange={(e) => {
                setcountinstock(e.target.value);
              }}
            />
               <input
              type="text"
              required
              className="form-input"
              placeholder="avialbel"
              value={isAvailable}
              onChange={(e) => {
                setisAvailable(e.target.value);
              }}
            /><br/>
            <button
              className="btn3 btn1-three"
              type="submit"
            
            >
              EDIT
            </button>
          </form>
     
    
      )}
         </div>
         </div>
    </div>
  );
}


export default Editproduct;
