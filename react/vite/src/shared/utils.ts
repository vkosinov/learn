import { CartItem } from '../entities/cart'

export const getIsAddedCart = (items: CartItem[], id: number) =>
  items.some((item) => item.id === id)
