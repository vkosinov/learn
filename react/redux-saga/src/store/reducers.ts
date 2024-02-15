import { productSlice } from '../entities/product'

export const rootReducers = {
  products: productSlice.reducer,
}
