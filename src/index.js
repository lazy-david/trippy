import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Services from './Services/Services';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "services",
    element: <Services/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
