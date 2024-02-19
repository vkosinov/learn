import { Layout, theme } from 'antd'

import React, { memo } from 'react'
import { Header } from '../../../../widgets/header'
import { CategoryFilter } from '../../../../features/category-filter'

const { Content, Sider, Footer } = Layout

type Props = { children: React.ReactNode; isProducts?: boolean }

export const ProductLayout = memo(({ children, isProducts }: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        {isProducts && <CategoryFilter />}
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
