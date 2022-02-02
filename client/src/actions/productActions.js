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

export const Getcategory=(category)=>dispatch=>{
  var filteredproducts ;
  dispatch({type:'GET_PRODUCTS_REQUEST'})
  Api.get('/products').then(res=>{
      filteredproducts = res.data   
  if(category!=='all'){
            filteredproducts = res.data.filter(product =>{return product.category.toLowerCase().includes(category)})
        }

        dispatch({type:'GET_PRODUCTS_SUCCESS' , payload : filteredproducts})
      })
    
}