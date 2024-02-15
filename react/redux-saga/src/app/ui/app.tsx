import { memo } from 'react'
import { Products } from '../../entities/products'

export const App = memo(() => {
  return (
    <>
      <h1>APP</h1>
      <Products />
    </>
  )
})
