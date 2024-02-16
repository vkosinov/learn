import { useParams } from 'react-router-dom'
import { ProductLayout } from '../../layout/product'
import { Product } from '../../../widgets/product'

export const ProductPage = () => {
  const { id } = useParams()

  console.log(id)

  return (
    <ProductLayout>
      <Product id={id} />
    </ProductLayout>
  )
}
