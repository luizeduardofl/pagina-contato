import React from 'react'
import ReactDOM from 'react-dom/client'
import PaginaInicial from './PaginaInicial'
import PaginaContato from './PaginaContato';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import PaginaNaoEncontrada from './PaginaNaoEncontrada';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />,
    errorElement: <PaginaNaoEncontrada />,
  },

  {
    path: '/contato',
    element: <PaginaContato />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
