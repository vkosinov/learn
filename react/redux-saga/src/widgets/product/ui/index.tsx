import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductInfo, fetchProductStarted } from '../../../entities/product'
import { RootState } from '../../../shared/store'
import { Spin } from 'antd'

type Props = {
  id?: string
}

export const Product = memo(({ id }: Props) => {
  const dispatch = useDispatch()
  const product = useSelector((state: RootState) => state.product.value.data)
  const status = useSelector((state: RootState) => state.product.value.status)

  useEffect(() => {
    if (id) {
      dispatch(fetchProductStarted(id))
    }
  }, [dispatch, id])

  return (
    <>
      {status === 'LOADING' && (
        <Spin
          size="large"
          style={{ display: 'grid', placeContent: 'center', margin: '32px 0' }}
        />
      )}

      {status === 'SUCCESS' && product && (
        <ProductInfo
          id={product.id}
          title={product.title}
          description={product.description}
          thumbnail={product.thumbnail}
          stock={product.stock}
          brand={product.brand}
          category={product.category}
          rating={product.rating}
          price={product.price}
          images={product.images}
        />
      )}
    </>
  )
})
