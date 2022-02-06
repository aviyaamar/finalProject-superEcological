import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { filterProducts} from "../../actions/productActions";
import './Filter.css'



const Filter = () => {
  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();


  
  return (
    <div>
    <div className="container_filter ">
      <div className="filter search" >
        <input
          value={searchkey}
          onChange={(e) => {
            setsearchkey(e.target.value);
          }}
          type="text"
          placeholder="search products"
          className="form-search"
        />
      </div>

      <div className="col-md-2 mt-4 ml-2">
        <select
          className="form-search"
          value={sort}
         
          onChange={(e) => {
            setsort(e.target.value);
          }}
        >
          
          <option value="popular">Popular</option>
          <option value="htl">high to Low</option>
          <option value="lth">Low To High</option>
        </select>
      </div>

      <div className="col-md-2 mt-4 ml-2">
        <select
          className="form-search"
          value={category}
          onChange={(e) => {
            setcategory(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="fruits">fruits</option>
          <option value="vegetables">vegetables</option>
          <option value="Related Products">Related Products</option>
        </select>
 
        <button className="form-search button-search" onClick={()=>{dispatch(filterProducts(searchkey , sort , category))}}>FILTER</button>
        </div>
        

      
    </div>
  </div>
  );
};

export default Filter;
