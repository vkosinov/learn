import { CART_STORAGE_KEY } from '../constants'
import { CartItem } from '../../types'

export const saveToLocalStorage = (items: CartItem[]) => {
  const neCartItems = JSON.stringify(items)

  window.localStorage.setItem(CART_STORAGE_KEY, neCartItems)
}
