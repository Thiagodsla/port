import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Routes from './routes/Routes';


import {  RouterProvider } from "react-router-dom";
const router = Routes



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// {/* <App /> */}