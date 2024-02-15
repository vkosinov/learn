import { memo } from 'react'
import { ProductList } from '../../widgets/product-list'

export const App = memo(() => {
  return (
    <>
      <h1>APP</h1>
      <ProductList />
    </>
  )
})
