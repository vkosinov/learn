import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './constants'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value: INITIAL_STATE,
  },
  reducers: {
    fetchProductsStarted: (state) => {
      state.value = { ...state.value, status: 'LOADING', error: '' }
    },
    fetchProductsSucceeded: (state, action) => {
      state.value = { ...action.payload, status: 'SUCCESS' }
    },
    fetchProductsFailed: (state, action) => {
      state.value = { ...state.value, error: action.payload }
    },
  },
})

export const {
  fetchProductsStarted,
  fetchProductsSucceeded,
  fetchProductsFailed,
} = productsSlice.actions
