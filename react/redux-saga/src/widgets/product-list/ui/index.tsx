import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'

import { Col, Row, Spin, Typography } from 'antd'
import { ProductCard, fetchProductsStarted } from '../../../entities/products'

export const ProductList = () => {
  const dispatch = useDispatch()
  const status = useSelector((state: RootState) => state.products.value.status)
  const products = useSelector(
    (state: RootState) => state.products.value.products
  )

  const { Title } = Typography

  useEffect(() => {
    dispatch(fetchProductsStarted())
  }, [dispatch])

  return (
    <>
      <Title>Products</Title>

      {status === 'LOADING' && (
        <Spin
          size="large"
          style={{ display: 'grid', placeContent: 'center', margin: '32px 0' }}
        />
      )}

      {status === 'FAILED' && <p>Error</p>}

      {status === 'SUCCESS' && (
        <Row gutter={[32, 32]}>
          {products.map((product) => (
            <Col span={6} key={product.id}>
              <ProductCard
                {...product}
                thumbnail={product.images[product.images.length - 1]}
              />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}
