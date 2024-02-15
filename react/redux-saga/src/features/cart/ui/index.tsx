import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { cartSlice } from '../slice'

export const Cart = () => {
  const count = 0 //useSelector((state: RootState) => state.cart.value)
  const dispatch = useDispatch()

  const { increment, decrement } = cartSlice.actions

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>Card Counter</h1>
      <p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </p>

      <h2>Total:{count}</h2>
    </div>
  )
}
