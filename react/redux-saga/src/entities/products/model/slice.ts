import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INITIAL_PAGINATION, INITIAL_STATE } from './constants'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value: INITIAL_STATE,
  },
  reducers: {
    fetchProductsStarted: (state) => {
      state.value = {
        data: [],
        status: 'LOADING',
        error: null,
        pagination: INITIAL_PAGINATION,
      }
    },

    fetchProductsSucceeded: (state, action) => {
      state.value = {
        ...action.payload,
        data: action.payload.products,
        pagination: {
          total: action.payload.total,
          skip: action.payload.skip,
          limit: action.payload.limit,
        },
        status: 'SUCCESS',
      }
    },

    fetchProductsFailed: (state, action) => {
      state.value = {
        ...state.value,
        data: [],
        status: 'FAILED',
        error: action.payload,
      }
    },

    setPaginationSkip: (state, { payload: skip }: PayloadAction<number>) => {
      state.value = {
        ...state.value,
        pagination: {
          ...state.value.pagination,
          skip,
        },
      }
    },

    setPaginationLimit: (state, { payload: limit }: PayloadAction<number>) => {
      state.value = {
        ...state.value,
        pagination: {
          ...state.value.pagination,
          limit,
          skip: 0,
        },
      }
    },
  },
})

export const {
  fetchProductsStarted,
  fetchProductsSucceeded,
  fetchProductsFailed,
  setPaginationSkip,
  setPaginationLimit,
} = productsSlice.actions
