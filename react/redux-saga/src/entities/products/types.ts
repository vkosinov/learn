import type { Product } from '../product'

export type ProductsState = {
  products: Product[]
  total: number
  skip: number
  limit: number
  status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'FAILED'
  error: string | null
}
