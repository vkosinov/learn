import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './constants'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: INITIAL_STATE,
  },
  reducers: {
    fetchProductStarted: (state, { payload: id }: PayloadAction<string>) => {
      state.value = { ...state.value, status: 'LOADING', error: '' }
    },

    fetchProductSucceeded: (state, action) => {
      state.value = { ...action.payload, status: 'SUCCESS' }
    },

    fetchProductFailed: (state, action) => {
      state.value = { ...state.value, error: action.payload }
    },
  },
})

export const {
  fetchProductStarted,
  fetchProductSucceeded,
  fetchProductFailed,
} = productSlice.actions
