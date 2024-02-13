import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../features/cart'

export const store = configureStore({ reducer: { cart: cartSlice.reducer } })

export type RootState = ReturnType<typeof store.getState>
