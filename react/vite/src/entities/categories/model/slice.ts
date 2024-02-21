import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './constants'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    value: INITIAL_STATE,
  },
  reducers: {
    fetchCategoriesStarted: (state) => {
      state.value = { data: null, status: 'LOADING', error: null }
    },

    fetchCategoriesSucceeded: (state, action) => {
      state.value = { data: action.payload, status: 'SUCCESS', error: null }
    },

    fetchCategoriesFailed: (state, action) => {
      state.value = { data: null, error: action.payload, status: 'FAILED' }
    },
  },
})

export const {
  fetchCategoriesStarted,
  fetchCategoriesSucceeded,
  fetchCategoriesFailed,
} = categoriesSlice.actions
