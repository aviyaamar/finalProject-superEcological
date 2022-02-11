import React, {useState} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import Train from './pages/Train/Train';
import Navbar from "./component/Navbar/Navbar";

import Cartscreen from "./pages/Cart/cart";
import Order from "./pages/order";
import Orderinfo from './pages/OrderInfo'
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";
import Favorite from './pages/favorite/favorite';

import Map from "./component/Map.js/map";



const App = ()=>{
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route path='/' exact component={Train}/>
      <Route path='/cart' exact component={Cartscreen}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/order' exact component={Order}/>
      <Route path='/orderinfo/:orderid' component={Orderinfo} />
      <Route path='/profile' exact component={Profile}/>
      <Route path='/admin' exact component={Admin}/>
      {/* <Route path='/Error' exact component={Error}/>
      <Route path='/Success' exact component={Success}/> */}
      <Route path='/favorite' exact component={Favorite}/>    
       <Route path='/map' exact component={Map}/> 
    
    </Switch>
    </BrowserRouter>
    </div>
  )
}
export default App