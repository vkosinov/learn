import { FetchStatus } from '../../shared/types'

export type Product = {
  id: number
  title: string
  description: string
  price: number
  images: string[]
}

export type ProductsState = {
  data: Product[]
  pagination: Pagination
  status: FetchStatus
  error: string | null
}

export type Pagination = {
  total: number
  skip: number
  limit: number
}
