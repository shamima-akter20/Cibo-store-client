import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Roots from './Roots/Roots.jsx';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Pages/Home';
import AddProduct from './AddProduct.jsx/AddProduct';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import AuthProvider from './Firebase/AuthProvider';
import PrivateRoute from './Authentication/PrivateRoute';


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
        element: <PrivateRoute>
          <AddProduct></AddProduct>
          </PrivateRoute>  ,
      },
      {
        path:"/login",
        element: <Login></Login> ,
      },
      {
        path:"/registration",
        element: <Registration></Registration> ,
      },
      
     
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
