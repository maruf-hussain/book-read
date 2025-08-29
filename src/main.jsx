import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home/Home.jsx';
import Roots from './components/Roots/Roots.jsx';
import Error from './components/ErrorPage/Error.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", 
      element:<Home></Home>,
      },
      {
        path:"/dashboard",
        element: <Dashboard></Dashboard>
      }
    ] 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
