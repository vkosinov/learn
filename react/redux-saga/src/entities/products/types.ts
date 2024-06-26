import { FetchStatus } from '../../shared/types'

export type Product = {
  id: number
  title: string
  description: string
  price: number
  stock: number
  images: string[]
}

export type ProductsState = {
  data: Product[]
  pagination: Pagination
  status: FetchStatus
  error: string | null
  category: string | null
}

export type Pagination = {
  current: number
  total: number
  skip: number
  limit: number
}
