import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './Root.jsx'
import Home from './component/Home.jsx';
import ErrorPage from './component/Error_page.jsx';
import AuthProvider from './component/AuthProvider.jsx'
import Login from './component/Login.jsx';
import Registration from './component/Registration.jsx'
import AddBlog from './component/AddBlog.jsx'
import AllBlogs from './component/AllBlogs.jsx'
import FeaturedBlogs from './component/FeaturedBlogs.jsx'
import Wishlist from './component/Wishlist.jsx'
import Details from './component/Details.jsx'
import Update from './component/Update.jsx'
import PrivateRoute from './component/PrivateRoute.jsx'
import {
  createBrowserRouter, 
  RouterProvider, 
 } from "react-router-dom";

 const router = createBrowserRouter([ 
  { 
    path: "/", 
    element: <Root></Root>, 
    errorElement: <ErrorPage />,
    children: [
      { path: "/",
        element: <Home></Home>
      },
      { path: "/Login",
        element: <Login></Login>
      },
      { path: "/Registration",
      element: <Registration></Registration>
      },
      { path: "/AddBlog",
      element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
      },
      { path: "/AllBlogs",
      element: <AllBlogs></AllBlogs>,
      loader: () => fetch('https://thoughts-server-zeta.vercel.app/blogs')
      },
      { path: "/FeaturedBlogs",
      element: <FeaturedBlogs></FeaturedBlogs>
      },
      { path: "/Wishlist",
      element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
      { path: "/Details/:id",
      element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      { path: "/Update/:id",
      element: <PrivateRoute><Update></Update></PrivateRoute>
      },
    ]
  }, 
 ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router} /> 
  </AuthProvider>
  </React.StrictMode>,
)
