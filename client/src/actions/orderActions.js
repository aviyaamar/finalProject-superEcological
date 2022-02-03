import Api from '../Api/Api'

export const placeOrder =(token , subtotal) =>(dispatch , getState)=>{

    const currentUser = getState().loginReducer.currentUser
    const demoItems = getState().cartReducer.cartItems

    const cartItems = new Array();

    for(var i=0 ; i<demoItems.length ; i++) {

         var item ={
              name : demoItems[i].name ,
              quantity : demoItems[i].quantity,
              price : demoItems[i].price,
              _id : demoItems[i]._id
         }

         cartItems.push(item)

    }



    dispatch({type:'PLACE_ORDER_REQUEST'})

    Api.post('/order/placeorder' , {token , subtotal , currentUser , cartItems}).then(res=>{

         dispatch({type:'PLACE_ORDER_SUCCESS'})
         console.log(res);

    }).catch(err=>{
        dispatch({type:'PLACE_ORDER_FAILED'})
    })


}
