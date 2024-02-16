import { FetchStatus } from '../../shared/types'

export type Product = {
  id: number
  title: string
  description: string
  price: number
  images: string[]
}

export type ProductsState = {
  products: Product[]
  total: number
  skip: number
  limit: number
  status: FetchStatus
  error: string | null
}
