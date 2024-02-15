import { memo, useEffect } from 'react'
import { fetchProductsStarted } from '../slice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'

export const Products = memo(() => {
  const dispatch = useDispatch()
  const status = useSelector((state: RootState) => state.products.value.status)
  const products = useSelector(
    (state: RootState) => state.products.value.products
  )

  useEffect(() => {
    dispatch(fetchProductsStarted())
  }, [dispatch])

  return (
    <>
      <h2>Products</h2>
      {status === 'LOADING' && <p>Loading</p>}
      {status === 'FAILED' && <p>Error</p>}
      {status === 'SUCCESS' && <p>Success</p>}
      {status === 'SUCCESS' && (
        <>
          {products.map((item) => (
            <p key={item.id}>
              <b>{item.title}</b>: {item.price}
            </p>
          ))}
        </>
      )}
    </>
  )
})
