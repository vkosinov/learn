import { ShoppingCartOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, theme } from 'antd'

import React, { memo } from 'react'

const { Header, Content, Sider } = Layout

type Props = { children: React.ReactNode }

export const ProductLayout = memo(({ children }: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <a href="/">
          <ShoppingCartOutlined style={{ fontSize: '32px' }} />
          SHOP
        </a>
      </Header>

      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}></Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
})
