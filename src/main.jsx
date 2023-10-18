import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Roots from './Roots/Roots.jsx';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Pages/Home';
import AddProduct from './AddProduct.jsx/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots> ,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
          path:"/",
          element: <Home></Home> ,
      },
      {
        path:"/AddProduct",
        element: <AddProduct></AddProduct> ,
    },
     
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
