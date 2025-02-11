import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Register/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h2>Router not found</h2>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: 'register',
            element: <Register/>,
        },
        {
            path: 'login',
            element: <Login/>,
        },
       
      ]
    },
  ]);

  export default router;


 
  