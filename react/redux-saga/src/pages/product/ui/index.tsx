import { useParams } from 'react-router-dom'
import { ProductLayout } from '../../layout/product'

export const ProductPage = () => {
  const { id } = useParams()

  console.log(id)

  return <ProductLayout>{id}</ProductLayout>
}
