import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'

import { Link } from 'react-router-dom'
import { RootState } from '../../../shared/store'
import { useSelector } from 'react-redux'
import styles from './cart-header.module.css'

export const CartHeader = () => {
  const cart = useSelector((state: RootState) => state.cart)

  return (
    <Link to="/cart" className={styles.link}>
      <Badge count={cart.value.length}>
        <ShoppingCartOutlined className={styles.icon} />
      </Badge>
    </Link>
  )
}
