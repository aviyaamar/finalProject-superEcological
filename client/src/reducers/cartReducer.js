export const cartReducer=(state={cartItems : []} , action)=>{
    switch(action.type) {
        case 'ADD_TO_CART' : 
        const alreadyexist = state.cartItems.find(item => item._id === action.payload._id)
        if(alreadyexist){
            return {
                ...state ,
                cartItems : state.cartItems.map((item) => item._id === action.payload._id ? action.payload : item)
            }
        }
        else{
            return {
                ...state ,
                cartItems : [...state.cartItems , action.payload]
         }

        }

        case 'DELETE_FROM_CART' : return{
              ...state , 
              cartItems : state.cartItems.filter(item=> {return item._id !==action.payload._id})

        }
        default : return state
    }
}

export const favoriteReducer=(state={favoriteItems : []} , action)=>{
    switch(action.type) {
        case 'ADD_TO_FAVORITE' : 
        const alreadyexist = state.favoriteItems.find(item => item._id === action.payload._id)
        if(alreadyexist) {
            return {
                ...state ,
                favoriteItems : state.favoriteItems.map((item) => item._id === action.payload._id ? action.payload : item)
            }
        }
        else{
            return {
                ...state ,
                favoriteItems : [...state.favoriteItems , action.payload]
 
         }

        }

        case 'DELETE_FROM_FAVORITE' : return{

              ...state , 
              favoriteItems : state.favoriteItems.filter(item=> {return item._id !==action.payload._id})

        }
        default : return state
    }
}