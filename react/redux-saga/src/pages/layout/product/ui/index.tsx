import { ShoppingCartOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'

import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const { Header, Content, Sider, Footer } = Layout

type Props = { children: React.ReactNode }

export const ProductLayout = memo(({ children }: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG, boxShadowTertiary },
  } = theme.useToken()

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[]}
        />
      </Sider>

      <Layout>
        <Header
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

          <Link to="/card" style={{ marginLeft: 'auto' }}>
            <ShoppingCartOutlined
              style={{
                fontSize: '32px',
              }}
            />
          </Link>
        </Header>

        <Content
          style={{
            padding: 24,
            marginTop: 16,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Shop ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  )
})
