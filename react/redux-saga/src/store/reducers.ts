import { productSlice } from '../entities/products'

export const rootReducers = {
  products: productSlice.reducer,
}
