import React, {useState} from "react";
import Register from "./component/Register";
import Login from "./component/Login";
import Train from "./pages/Train";

import { BrowserRouter, Route, Switch} from "react-router-dom";
import Product from "./component/products";
const App = ()=>{
  const [isUserLogedIn, setIsUserLogedIn] = useState(false)  



  return (
    <div>
      <BrowserRouter>
      <Switch>
      {/* <Home setIsUserLogedIn={setIsUserLogedIn} /> */}
      <Route path='/' exact component={Train}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/login' exact component={Login}/>
    </Switch>
    </BrowserRouter>
    </div>
  )
}
export default App