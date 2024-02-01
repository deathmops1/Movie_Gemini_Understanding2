import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { SearchForm } from './components/SearchForm'
import { MovieDetail } from './components/MovieDetail'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchForm />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);