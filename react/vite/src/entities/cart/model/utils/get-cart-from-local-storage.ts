import { CART_STORAGE_KEY } from '../constants'
import { CartItem } from '../../types'

export const getCartFromLocalStorage = (): CartItem[] => {
  const cartItems: CartItem[] = JSON.parse(
    window.localStorage.getItem(CART_STORAGE_KEY) ?? '[]',
  )

  return cartItems
}
