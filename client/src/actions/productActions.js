import Api from '../Api/Api'
export const getAllProducts  = () => (dispatch) => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });
  
    Api
      .get("/products")
      .then((res) => {
        console.log(res.data);
  
        dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
      });
  };
  
  export const filterProducts=(searchKey , sortKey , category)=>dispatch=>{
    var filteredproducts ;
    dispatch({type:'GET_PRODUCTS_REQUEST'})
    Api.get('/products').then(res=>{
        filteredproducts = res.data      
        if(searchKey){
             filteredproducts = res.data.filter(product => {return product.name.toLowerCase().includes(searchKey)})
        }

        if(sortKey !=='popular'){
            if(sortKey=='htl'){
                filteredproducts = res.data.sort((a,b)=>{ 
                    return -a.price + b.price
                })
            }
            else{
                filteredproducts = res.data.sort((a,b)=>{
                    return a.price - b.price
                })
            }
        }
        if(category!=='all')
        {
            filteredproducts = res.data.filter(product =>{return product.category.toLowerCase().includes(category)})
        }

        dispatch({type:'GET_PRODUCTS_SUCCESS' , payload : filteredproducts})

    }).catch(err=>{
        dispatch({type:'GET_PRODUCTS_FAILED'})
    })
}

// export const Getcategory=(category)=>dispatch=>{
//   var filteredproducts ;
//   dispatch({type:'GET_PRODUCTS_REQUEST'})
//   Api.get('/products').then(res=>{
//       filteredproducts = res.data   
//   if(category!=='all'){
//             filteredproducts = res.data.filter(product =>{return product.category.toLowerCase().includes(category)})
//         }

//         dispatch({type:'GET_PRODUCTS_SUCCESS' , payload : filteredproducts})
//       }) 
// }

export const deleteProduct=(productid)=>dispatch=>{
    dispatch({type:'DELETE_PRODUCT_REQUEST'})
    Api.post('products/deleteproduct' , {productid}).then(res=>{
  
      dispatch({type:'DELETE_PRODUCT_SUCCESS' , payload : res.data})
      alert('Product deleted successfully')
          window.location.href='/admin'
  
  
    }).catch(err=>{
      dispatch({type:'DELETE_PRODUCT_FAILED' , payload : err})
  
    })
  }

  export const addProduct =(product)=> dispatch=>{

    dispatch({type:'ADD_PRODUCT_REQUEST'})

    Api.post('/products/addproduct' , {product}).then(res=>{
      console.log(res);
      dispatch({type:'ADD_PRODUCT_SUCCESS'})
      window.location.href='/'
    }).catch(err=>{
      dispatch({type:'ADD_PRODUCT_FAILED'})

    })

}

export const updateProduct =(productid , updatedproduct)=> dispatch=>{

  dispatch({type:'UPDATE_PRODUCT_REQUEST'})

  Api.post('/products/updateproduct' , {productid , updatedproduct}).then(res=>{
    console.log(res);
    dispatch({type:'UPDATE_PRODUCT_SUCCESS'})
    window.location.href='/'
    
  }).catch(err=>{
    dispatch({type:'UPDATE_PRODUCT_FAILED'})

  })

}

export const getProductById = (productid) => (dispatch) => {
  dispatch({ type: "GET_PRODUCTBYID_REQUEST" });

  Api.post("/products/getproductbyid", { productid })
    .then((res) => {
      console.log(res);

      dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCTBYID_FAILED", payload: err });
    });
};
