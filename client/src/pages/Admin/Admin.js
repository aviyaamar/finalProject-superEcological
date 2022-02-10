import React , {useState, useEffect} from 'react'
import { Link , Switch , Route, BrowserRouter} from 'react-router-dom'
import Home from '../Home/Home'
import UserList from '../Admin/UserList'
import OrderList from './OrderList'
import AddProduct from './AddProduct'
import ProductList from './ProductsList'
import Editproduct from './Editproduct'
import Navbar from '../Admin/Navbar'
import {useSelector , useDispatch} from 'react-redux'


 function Admin() {
    // const userstate = useSelector(state=>state.loginReducer)
    // const currentUser = userstate.currentUser
    // useEffect(() => {
    //     if(currentUser) {
    //         if(!currentUser.isAdmin){

    //             window.location.href='/'
    //         }
    //     }
    //     else{
    //         window.location.href='/'

    //     }

        
       
    // }, [])


    return (
        <div> 
     <BrowserRouter>   
        {/* <Home/>   */}
        <Navbar/>
                        <Switch>
                        <Route path='/admin/' exact component={UserList}  />
                          <Route path='/admin/userslist' exact component={UserList} />
                          <Route path='/admin/orderslist' exact component={OrderList} />
                          <Route path='/admin/addnewproduct' exact component={AddProduct} />
                          <Route path='/admin/productslist' exact component={ProductList} />
                          <Route path='/admin/editproduct/:productid'  exact component={Editproduct} />
                       </Switch>  
                       </BrowserRouter>

                </div>
          

    
    )
}
export default Admin