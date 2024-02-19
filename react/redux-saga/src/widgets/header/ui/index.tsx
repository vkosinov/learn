import { Layout, theme } from 'antd'

import { Link } from 'react-router-dom'
import { CartHeader } from '../../../features/cart-header'
import { useSelector } from 'react-redux'
import { RootState } from '../../../shared/store'

const { Header: HeaderAntd } = Layout

export const Header = () => {
  const {
    token: { colorBgContainer, boxShadowTertiary },
  } = theme.useToken()

  const cart = useSelector((state: RootState) => state.cart)

  return (
    <HeaderAntd
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colorBgContainer,
        boxShadow: boxShadowTertiary,
      }}
    >
      <Link to="/">SHOP</Link>

      <CartHeader count={cart.value.length} />
    </HeaderAntd>
  )
}
