import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Error404Page from './pages/Error404Page'
import ProductListPage from './pages/products/ProductListPage'
import ProductDetailsPage from './pages/products/ProductDetailsPage'
 

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// contexto
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404Page />,
    children:[
      {
        path: 'products',
        element: <ProductListPage />,
      },
      {
        path: 'products/:idProduct',
        element: <ProductDetailsPage />
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root'))
// JSX -> JavaScript XML
.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
