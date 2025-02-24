import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Register/Login";
import Foods from "../Pages/Foods/Foods";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Purchase from "../Pages/FoodDetails/Purchase";
import PrivateRout from "./PrivateRout";
import MyFoods from "../Pages/MyFoods/MyFoods";
import AddFood from "../Pages/AddFood/AddFood";
import FoodsGallery from "../Pages/Gallery/FoodsGallery";



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
          path: '/foods/:id',
          element: <FoodDetails/>,
          loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
        },
        {
          path: '/purchase/:id',
          element: <PrivateRout><Purchase/></PrivateRout>
        },
        {
          path: '/myfoods',
          element: <PrivateRout><MyFoods/></PrivateRout>
        },
      
        {
          path: '/addfood',
          element: <PrivateRout><AddFood/></PrivateRout>
        },
        {
          path: '/foodsgallery',
          element: <FoodsGallery/>
        },
       
        {
            path: 'register',
            element: <Register/>,
        },
        {
            path: 'login',
            element: <Login/>,
        },
        {
            path: 'foods',
            element: <Foods/>
        }

       
      ]
    },
  ]);

  export default router;


 
  