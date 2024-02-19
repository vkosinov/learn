import { Typography } from 'antd'
import { ProductLayout } from '../../layout/product'
import { CardTable } from '../../../entities/cart'

const { Title } = Typography

export const CartPage = () => {
  return (
    <ProductLayout>
      <Title>Cart</Title>

      <CardTable />
    </ProductLayout>
  )
}
