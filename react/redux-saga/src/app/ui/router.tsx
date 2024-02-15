import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../../pages/main'
import { ProductPage } from '../../pages/product'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
    loader: ({ params }) => params,
  },
])
