import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './constants'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: INITIAL_STATE,
  },
  reducers: {
    fetchProductStarted: (state, { payload: id }: PayloadAction<string>) => {
      state.value = { data: null, status: 'LOADING', error: null }
    },

    fetchProductSucceeded: (state, action) => {
      state.value = { data: action.payload, status: 'SUCCESS', error: null }
    },

    fetchProductFailed: (state, action) => {
      state.value = { data: null, error: action.payload, status: 'FAILED' }
    },
  },
})

export const {
  fetchProductStarted,
  fetchProductSucceeded,
  fetchProductFailed,
} = productSlice.actions
