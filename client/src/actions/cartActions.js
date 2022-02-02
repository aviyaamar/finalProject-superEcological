export const addToCart = (product, quantity) =>(dispath, getState)=>{
    const cartItem  = {
        name: product.name, 
        _id : product._id, 
        price: product.price, 
        countInStock: product.countInStock, 
        quantity: quantity
    }
    dispath({type:'ADD_TO_CART', payload:cartItem})
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
}

export const deleteFromCart = (item)=>(dispath, getState ) =>{
    dispath({type:"DELETE_FROM_CART", payload:item })
    localStorage.setItem('cartItems' , JSON.stringify(getState().cartReducer.cartItems))
}