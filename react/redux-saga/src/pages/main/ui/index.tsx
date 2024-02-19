import { ProductList } from '../../../widgets/product-list'
import { ProductLayout } from '../../layout/product'

export const MainPage = () => {
  return (
    <ProductLayout isProducts>
      <ProductList />
    </ProductLayout>
  )
}
