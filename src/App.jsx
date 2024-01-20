import React from 'react'
import Home from './Home'
import Login from './Login'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Signup from './Signup.Jsx';
import "./App.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/Signup",
    element: <Signup/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/SignLog",
    element: 
    <div>

      <Login msg="Congrats! Now Login"/>
    </div>,
  }
]);
const App = () => {

  return (
    <div>
          <RouterProvider router={router} />
    </div>
  )
}

export default App