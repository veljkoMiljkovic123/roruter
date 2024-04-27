import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
  const router = createBrowserRouter([
    {
      path:'/',
      element:<App />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:'/',
          element:<HomePage />
        },
        {
          path:'/products',
          element:<ProductsPage />
        },
        {
          path:'/about',
          element:<AboutPage />
        },
        {
          path:'/contact',
          element:<ContactPage />
        }
      ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
