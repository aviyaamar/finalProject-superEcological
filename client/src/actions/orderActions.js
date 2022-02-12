import Api from '../Api/Api'

export const placeOrder =(token , subtotal) =>(dispatch , getState)=>{

    const currentUser = getState().loginReducer.currentUser
    const demoItems = getState().cartReducer.cartItems

    const cartItems = new Array();

    for(var i=0 ; i<demoItems.length ; i++) {

         var item ={
              image: demoItems[i].image, 
              name : demoItems[i].name ,
              email: demoItems[i].email, 
              quantity : demoItems[i].quantity,
              price : demoItems[i].price,
              _id : demoItems[i]._id
         }
         cartItems.push(item)
    }
    dispatch({type:'PLACE_ORDER_REQUEST'})
    Api.post('order/placeorder' , {token , subtotal , currentUser , cartItems}).then(res=>{

         dispatch({type:'PLACE_ORDER_SUCCESS'})
         localStorage.removeItem('cartItems')
         window.location.reload()
         console.log(res);

    }).catch(err=>{
        dispatch({type:'PLACE_ORDER_FAILED'})
    })


}
export const getOrdersByUserId=()=>(dispatch , getState)=>{
     const userid = getState().loginReducer.currentUser._id
      dispatch({type:'GET_ORDERSBYUSERID_REQUEST'})
      Api.post('order/getordersbyuserid' , {userid:userid}).then(res=>{
           dispatch({type:'GET_ORDERSBYUSERID_SUCCESS' , payload:res.data})
           console.log(res.data);
      }).catch(err=>{
          dispatch({type:'GET_ORDERSBYUSERID_FAILED' , payload:err})

      })
}

export const getOrderById=(orderid)=>(dispatch , getState)=>{

     dispatch({type:'GET_ORDERBYID_REQUEST'})

     Api.post('order/getorderbyid' , {orderid:orderid}).then(res=>{

          dispatch({type:'GET_ORDERBYID_SUCCESS' , payload:res.data})
          console.log(res.data);

     }).catch(err=>{
         dispatch({type:'GET_ORDERBYID_FAILED' , payload:err})

     })
}
export const getAllOrders=()=>(dispatch , getState)=>{

     dispatch({type:'GET_ALLORDERS_REQUEST'})

     Api.get('/order/getallorders').then(res=>{

          dispatch({type:'GET_ALLORDERS_SUCCESS' , payload:res.data})
          console.log(res.data);

     }).catch(err=>{
         dispatch({type:'GET_ALLORDERS_FAILED' , payload:err})

     })


}

