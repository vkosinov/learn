import { Pagination, ProductsState } from '../types'

export const INITIAL_PAGINATION: Pagination = {
  current: 1,
  total: 100,
  skip: 0,
  limit: 10,
}

export const INITIAL_STATE: ProductsState = {
  data: [],
  pagination: INITIAL_PAGINATION,
  status: 'IDLE',
  error: null,
  category: null,
}

export const FETCH_PRODUCTS_STARTED = 'products/fetchProductsStarted'
export const SET_PAGINATION_CURRENT = 'products/setPaginationCurrent'
export const SET_PAGINATION_LIMIT = 'products/setPaginationLimit'
export const SET_PRODUCTS_CATEGORY = 'products/setProductsCategory'
