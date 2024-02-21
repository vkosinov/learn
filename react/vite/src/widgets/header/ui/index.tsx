import { Layout, theme } from 'antd'

import { Link } from 'react-router-dom'
import { CartHeader } from '../../../features/cart-header'

import { HeartOutlined } from '@ant-design/icons'

const { Header: HeaderAntd } = Layout

export const Header = () => {
  const {
    token: { colorBgContainer, boxShadowTertiary },
  } = theme.useToken()

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
      <Link to="/">
        <HeartOutlined /> SHOP
      </Link>

      <CartHeader />
    </HeaderAntd>
  )
}
