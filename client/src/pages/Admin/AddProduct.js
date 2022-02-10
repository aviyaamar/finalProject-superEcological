import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../actions/productActions";
import Loader from '../../component/Loading/Loading'
import Error from '../../component/Error/Error'
import Succes from '../../component/Error/Succes'
import Home from '../../pages/Home/Home'
import { AiOutlineFileAdd } from "react-icons/ai";


const AddProduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [countinstock, setcountinstock] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [isAvailable, setisAvailable]= useState(true)
  const dispatch = useDispatch();

  const addproductstate=useSelector(state=>state.addProductReducer)
  const {success , error , loading } = addproductstate

  const addproduct = (e) => {
    e.preventDefault();
    const product = {
      name: name,
      price: price,
      countInStock: countinstock,
      image: imageurl,
      description: description,
      isAvailable:isAvailable,
      category
      
    };
    
    dispatch(addProduct(product));
  };
  return (
  <div>
    <Home/>
      <div className="row justify-content-center">
        <div className="col-md-8 shadow p-3 mb-5 bg-white rounded">

          {success && (<Succes success='Product Added Succesfully'/>)}
          {loading && (<Loader />)}
          {error && (<Error error='Something went wrong'/>)}

          <h2 className="text-center-h2">ADD PROUCT <span><AiOutlineFileAdd/></span></h2>
          <div className='container'>
          <form  className="form-update"  onSubmit={addproduct}>
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
              className="form-input"
              placeholder="name"
              value={isAvailable}
              onChange={(e) => {
                setisAvailable(e.target.value);
              }}
            />
            <button
              className="btn3 btn-three"
              type="submit"
              
            >
              ADD
            </button>
          </form>
        </div>
        </div>
      </div>
  </div>);
};

export default AddProduct;
