import { productsSlice } from '../../entities/products'
import { productSlice } from '../../entities/product'
import { cartSlice } from '../../entities/cart'
import { categoriesSlice } from '../../entities/categories'

export const rootReducers = {
  products: productsSlice.reducer,
  product: productSlice.reducer,
  cart: cartSlice.reducer,
  categories: categoriesSlice.reducer,
}
