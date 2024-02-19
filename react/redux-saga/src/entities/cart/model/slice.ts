import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getCartFromLocalStorage } from './utils/get-cart-from-local-storage'
import { CartItem } from '../types'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: getCartFromLocalStorage(),
  },
  reducers: {
    add: (state, { payload: item }: PayloadAction<CartItem>) => {
      state.value = [...state.value, item]
    },

    remove: (state, { payload: id }: PayloadAction<number>) => {
      state.value = state.value.filter((item) => item.id !== id)
    },

    clear: (state) => {
      state.value = []
    },
  },
})

export const { add, remove, clear } = cartSlice.actions
