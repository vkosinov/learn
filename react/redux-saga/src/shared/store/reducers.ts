import { productsSlice } from '../../entities/products'
import { productSlice } from '../../entities/product'

export const rootReducers = {
  products: productsSlice.reducer,
  product: productSlice.reducer,
}
