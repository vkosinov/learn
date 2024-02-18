import { Pagination, ProductsState } from '../types'

export const INITIAL_PAGINATION: Pagination = {
  total: 100,
  skip: 0,
  limit: 10,
}

export const INITIAL_STATE: ProductsState = {
  data: [],
  pagination: INITIAL_PAGINATION,
  status: 'IDLE',
  error: null,
}

export const FETCH_PRODUCTS_STARTED = 'products/fetchProductsStarted'
