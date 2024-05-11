import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './Root.jsx'
import Home from './component/Home.jsx';
import ErrorPage from './component/Error_page.jsx';
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
    ]
  }, 
 ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} /> 
  </React.StrictMode>,
)
