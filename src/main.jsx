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
import UpdateProduct from './Pages/UpdateProduct';
import NewUpPro from './Pages/NewUpPro';
import ProductDetails from './Pages/ProductDetails';
import EditUpdate from './Pages/EditUpdate';
import MyCart from './Pages/MyCart';

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
        path:"/login",
        element: <Login></Login> ,
      },
      {
        path:"/registration",
        element: <Registration></Registration> ,
      },
      {
        path:"/AddProduct",
        element: <PrivateRoute>
          <AddProduct></AddProduct>
          </PrivateRoute>  ,
      },
      {
        path:"/updateProduct/:brandName",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute> ,
        loader: () => fetch('https://cibo-store-server-33vmdc89i-shamima-akter.vercel.app/product'),
      },
      {
        path:'/newUpProduct/:id',
        element: <NewUpPro></NewUpPro> ,
        loader: ({params}) => fetch(`https://cibo-store-server-33vmdc89i-shamima-akter.vercel.app/product/${params.id}`)
      },

      {
        path: '/productDetails/:id',
        element: <ProductDetails/>,
        loader: ({params}) => fetch(`https://cibo-store-server-33vmdc89i-shamima-akter.vercel.app/product/${params.id}`)
      },
      {
        path: '/edit/:id',
        element: <EditUpdate></EditUpdate>,
        loader: ({params}) => fetch(`https://cibo-store-server-33vmdc89i-shamima-akter.vercel.app/product/${params.id}`)
      },
      {
        path: '/mycart',
        element:<PrivateRoute>  <MyCart></MyCart> </PrivateRoute>,
        loader: ()=> fetch('https://cibo-store-server-33vmdc89i-shamima-akter.vercel.app/cart')
      }
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
