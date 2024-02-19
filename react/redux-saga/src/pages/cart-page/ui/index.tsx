import { Breadcrumb, Typography } from 'antd'
import { ProductLayout } from '../../layout/product'
import { CardTable } from '../../../entities/cart'

const { Title } = Typography

export const CartPage = () => {
  return (
    <ProductLayout>
      <Breadcrumb
        items={[{ title: <a href="/">Home</a> }, { title: 'Cart' }]}
      />

      <Title>Cart</Title>

      <CardTable />
    </ProductLayout>
  )
}
