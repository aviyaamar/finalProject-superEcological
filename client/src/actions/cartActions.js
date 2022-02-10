export const addToCart = (product, quantity) =>(dispatch, getState)=>{
    const cartItem  = {
        image: product.image,  
        name: product.name, 
        _id : product._id, 
        price: product.price, 
        countInStock: product.countInStock, 
        quantity: quantity, 
        
    }
    dispatch({type:'ADD_TO_CART', payload:cartItem})
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
}

export const deleteFromCart = (item)=>(dispatch, getState ) =>{
    dispatch({type:"DELETE_FROM_CART", payload:item })
    localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))
}

// export const addToFavorite = (product, quantity) =>(dispatch, getState)=>{
//     const favoriteItems  = {
//         image: product.image,  
//         name: product.name, 
//         _id : product._id, 
//         price: product.price, 
//         countInStock: product.countInStock, 
//         quantity: quantity, 
        
//     }
//     dispatch({type:'ADD_TO_FAVORITE', payload:favoriteItems})
//     localStorage.setItem('favoriteItems', JSON.stringify(getState().favoriteReducer.favoriteItems))
// }

export const addFavorite = (product, quantity) =>(dispatch, getState)=>{
    const favoriteItems  = {
        image: product.image,  
        name: product.name, 
        _id : product._id, 
        price: product.price, 
        countInStock: product.countInStock, 
        quantity: quantity, 
        
    }
    dispatch({type:'ADD_TO_FAVORITE', payload:favoriteItems})
    localStorage.setItem('favoriteItems', JSON.stringify(getState().favoriteReducer.favoriteItems))
}

export const deleteFromFavorite = (item)=>(dispatch, getState ) =>{
    dispatch({type:"DELETE_FROM_FAVORITE", payload:item })
    localStorage.setItem('favoriteItems' , JSON.stringify(getState().favoriteReducer.favoriteItems))
}