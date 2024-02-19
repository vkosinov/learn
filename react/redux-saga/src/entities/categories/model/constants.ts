import { CategoriesState } from '../types'

export const INITIAL_STATE: CategoriesState = {
  data: null,
  status: 'IDLE',
  error: null,
}

export const GET_CATEGORIES = 'categories/fetchCategoriesStarted'
