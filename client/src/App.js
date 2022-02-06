import React, {useState} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import Train from './pages/Train/Train';
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cartscreen from "./pages/Cart/cart";
import Order from "./pages/order";
import Orderinfo from './pages/OrderInfo'
// import MapBox from "./component/Map.js/MapBox";
// import Mapo from './component/Map.js/map'


const App = ()=>{



  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      {/* <Home/> */}
      <Switch>
    
      <Route path='/' exact component={Train}/>
      <Route path='/cart' exact component={Cartscreen}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/order' exact component={Order}></Route>
      <Route path='/orderinfo/:orderid' component={Orderinfo} />
      {/* <Route path='/map' exact component={MapBox}/> */}
    </Switch>
    </BrowserRouter>
    </div>
  )
}
export default App