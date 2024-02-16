import { FetchStatus } from '../../shared/types'

export type ProductState = {
  data: Product | null
  status: FetchStatus
  error: string | null
}

type Product = {
  id: number
  title: string
  description: string
  price: number
  images: string[]
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
}
