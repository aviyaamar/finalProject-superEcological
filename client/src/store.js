import {combineReducers} from 'redux'
import {createStore , applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { getAllProductsReducer, deleteProductReducer, updateProductReducer,addProductReducer,getProductByIdReducer } from './reducers/productReducer'
import {cartReducer, favoriteReducer} from './reducers/cartReducer'
import {loginReducer, registerNewUserReducer, updateReducer, getAllUsersReducer, deleteUserReducer } from './reducers/userReducer'
import { placeOrderReducer,  getOrdersByUserIdReducer, getOrderByIdReducer, getAllOrdersReducer } from './reducers/orderReducer';

const finalReducer = combineReducers({
    getAllProductsReducer : getAllProductsReducer, 
    cartReducer : cartReducer ,
    registerNewUserReducer : registerNewUserReducer,
    loginReducer : loginReducer,
    placeOrderReducer: placeOrderReducer, 
    getOrdersByUserIdReducer:  getOrdersByUserIdReducer, 
    getOrderByIdReducer: getOrderByIdReducer, 
    updateReducer : updateReducer , 
    getAllUsersReducer: getAllUsersReducer, 
    deleteUserReducer:deleteUserReducer, 
    deleteProductReducer: deleteProductReducer, 
    updateProductReducer:updateProductReducer,
    addProductReducer:addProductReducer,
    getProductByIdReducer:getProductByIdReducer,
    getAllOrdersReducer:getAllOrdersReducer,
    favoriteReducer:favoriteReducer
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const favoriteItems = localStorage.getItem('favoriteItems') ? JSON.parse(localStorage.getItem('favoriteItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null


const initialState = {

  cartReducer : {cartItems : cartItems},
  loginReducer: {currentUser: currentUser},

}
const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
const store = createStore(finalReducer ,initialState, composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  ))
export default store