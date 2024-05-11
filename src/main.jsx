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
