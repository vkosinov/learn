import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../../pages/main'
import { ProductPage } from '../../pages/product'
import { CartPage } from '../../pages/cart-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
    // loader: ({ params }) => params,
  },
  {
    path: '/cart',
    element: <CartPage />,
    // loader: ({ params }) => params,
  },
])
