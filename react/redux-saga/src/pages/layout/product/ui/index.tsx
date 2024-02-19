import { Layout, Menu, theme } from 'antd'

import React, { memo } from 'react'
import { Header } from '../../../../widgets/header'

const { Content, Sider, Footer } = Layout

type Props = { children: React.ReactNode }

export const ProductLayout = memo(({ children }: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
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
        <Header />

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
