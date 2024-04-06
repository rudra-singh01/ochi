import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import OurWork from './components/OurWork/OurWork.jsx'
import Service from './components/Service/Service.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Insigts from './components/Insigts/Insigts.jsx'
import Contact from './components/Contact/Contact.jsx'


const router = createBrowserRouter([
  {
    path:'',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"service",
        element:<Service/> 
      },
      {
        path:"ourwork",
        element:<OurWork/>
      },
      {
        path:"aboutus",
        element:<AboutUs/>  
      },
      {
        path:"insigts",
        element:<Insigts/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
