import { productsSlice } from '../../entities/products'
import { productSlice } from '../../entities/product'
import { cartSlice } from '../../entities/cart'

export const rootReducers = {
  products: productsSlice.reducer,
  product: productSlice.reducer,
  cart: cartSlice.reducer,
}
