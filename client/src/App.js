import React, {useState} from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Train from "./pages/Train";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";

// import Product from "./component/products";

const App = ()=>{
 // const [isUserLogedIn, setIsUserLogedIn] = useState(false)  



  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <Switch>
      {/* <Home setIsUserLogedIn={setIsUserLogedIn} /> */}
      <Route path='/' exact component={Train}/>
      {/* <Route path='/home' exact component={Home}/> */}
      <Route path='/register' exact component={Register}/>
      <Route path='/login' exact component={Login}/>
    </Switch>
    </BrowserRouter>
    </div>
  )
}
export default App