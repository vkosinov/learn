import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'

import { Col, Row, Typography } from 'antd'
import { ProductCard, fetchProductsStarted } from '../../../entities/product'

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

      {status === 'LOADING' && <p>Loading</p>}
      {status === 'FAILED' && <p>Error</p>}

      {status === 'SUCCESS' && (
        <Row gutter={[32, 32]}>
          {products.map((product) => (
            <Col span={6} key={product.id}>
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}
