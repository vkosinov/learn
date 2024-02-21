import { MouseEventHandler, memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { CartItem, add, remove } from '../../../../cart'
import { RootState } from '../../../../../shared/store'
import { getIsAddedCart } from '../../../../../shared/utils'
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'

type Props = {
  id: number
  title: string
  description: string
  price: number
  img: string
  stock: number
}

export const ProductCart = memo(({ id, price, stock, img, title }: Props) => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart.value, shallowEqual)

  const isAddedCart = getIsAddedCart(cart, id)

  const handleAdd = useCallback<MouseEventHandler<HTMLElement>>(
    (evt) => {
      evt.preventDefault()
      evt.stopPropagation()

      const cartItem: CartItem = {
        id,
        img,
        title,
        price,
        stock,
        count: 1,
      }

      dispatch(add(cartItem))
    },
    [dispatch, id, price, stock, img, title],
  )

  const handleRemove = useCallback<MouseEventHandler<HTMLElement>>(
    (evt) => {
      evt.preventDefault()
      evt.stopPropagation()

      dispatch(remove(id))
    },
    [dispatch, id],
  )

  const iconAdd = <ShoppingCartOutlined />
  const iconRemove = <DeleteOutlined />

  return (
    <>
      {!isAddedCart && (
        <Button type="primary" icon={iconAdd} onClick={handleAdd} />
      )}

      {isAddedCart && (
        <Button
          danger
          type="primary"
          icon={iconRemove}
          onClick={handleRemove}
        />
      )}
    </>
  )
})

ProductCart.whyDidYouRender = true
