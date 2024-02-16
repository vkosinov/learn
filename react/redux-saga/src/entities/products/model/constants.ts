import { ProductsState } from '../types'

export const INITIAL_STATE: ProductsState = {
  products: [],
  total: 10,
  skip: 0,
  limit: 30,
  status: 'IDLE',
  error: null,
}

export const FETCH_PRODUCTS_STARTED = 'products/fetchProductsStarted'
