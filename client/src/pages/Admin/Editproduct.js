import React from 'react';
import { getProductById, updateProduct } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import Error from "../components/Error";
import Loader from '../../component/Loading/Loading'
// import Success from "../components/Success";

const Editproduct = ({match}) => {
  const dispatch = useDispatch();
  const productstate = useSelector((state) => state.getProductByIdReducer);
  const { product, error, loading } = productstate;

  const updateproductstate = useSelector((state) =>state.updateProductReducer)
  const {success , updateerror , updateloading} = updateproductstate

  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [countinstock, setcountinstock] = useState();
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
      <h2>Edit Product</h2>
      {loading && <Loader />}

      {updateloading && <Loader />}
      {updateerror && (<h1>'Something went wrong'</h1> )}
      {success && (<h1>'Product Updated Successfully'</h1>)}
      {error && <h1>"something went wrong"</h1>}
      {product && (
        <div>
          <form onSubmit={editproduct}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="name"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
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
              className="form-control mb-2 mr-sm-2"
              placeholder="decription"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="imageurl"
              value={imageurl}
              onChange={(e) => {
                setimageurl(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="category"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="count in stock"
              value={countinstock}
              onChange={(e) => {
                setcountinstock(e.target.value);
              }}
            />
               <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="avialbel"
              value={isAvailable}
              onChange={(e) => {
                setisAvailable(e.target.value);
              }}
            />
            <button
              className="btn mt-5"
              type="submit"
              style={{ float: "left" }}
            >
              Edit Product
            </button>
          </form>
        </div>
      )}
    </div>
  );
}


export default Editproduct;
