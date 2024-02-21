import { ProductState } from '../types'

export const INITIAL_STATE: ProductState = {
  data: null,
  status: 'IDLE',
  error: null,
}

export const GET_PRODUCT_BY_ID = 'product/fetchProductStarted'
