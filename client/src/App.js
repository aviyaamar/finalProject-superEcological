import React from "react";
import Register from "./component/Register";
import Login from "./component/Login";

import { BrowserRouter, Route} from "react-router-dom";

const App = ()=>{



  return (
    <div>
    <Register/>

    <Login/>
    </div>
  )
}
export default App