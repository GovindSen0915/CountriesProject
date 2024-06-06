import React from "react";
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Contact from './components/Contact'
import Home from './components/Home'
import Error from './components/Error'
import CountryDetail from './components/CountryDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:country',
        element: <CountryDetail />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
