import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './constants'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value: INITIAL_STATE,
  },
  reducers: {
    fetchProductsStarted: (state) => {
      state.value = {
        ...state.value,
        data: [],
        status: 'LOADING',
        error: null,
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
          current: state.value.pagination.current,
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

    setPaginationCurrent: (
      state,
      { payload: current }: PayloadAction<number>
    ) => {
      state.value = {
        ...state.value,
        pagination: {
          ...state.value.pagination,
          current,
          skip: (current - 1) * state.value.pagination.limit,
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
          current: 1,
        },
      }
    },
  },
})

export const {
  fetchProductsStarted,
  fetchProductsSucceeded,
  fetchProductsFailed,
  setPaginationCurrent,
  setPaginationLimit,
} = productsSlice.actions
