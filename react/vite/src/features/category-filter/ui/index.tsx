import { Menu, MenuProps, Spin, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../shared/store'
import { fetchCategoriesStarted } from '../../../entities/categories'
import { setProductsCategory } from '../../../entities/products'

const { Title } = Typography

export const CategoryFilter = () => {
  const dispatch = useDispatch()
  const categories = useSelector(
    (state: RootState) => state.categories.value.data
  )

  const category = useSelector(
    (state: RootState) => state.products.value.category
  )

  const status = useSelector(
    (state: RootState) => state.categories.value.status
  )

  useEffect(() => {
    if (!categories) {
      dispatch(fetchCategoriesStarted())
    }
  }, [dispatch, categories])

  const items = categories ? categories.map((item) => getItem(item, item)) : []

  const handleSelect: MenuProps['onSelect'] = ({ key }) => {
    dispatch(setProductsCategory(key))
  }
  const handleDeselect: MenuProps['onDeselect'] = () => {
    dispatch(setProductsCategory(null))
  }

  return (
    <>
      <Title level={3} style={{ color: '#fff', paddingLeft: 24 }}>
        Categories
      </Title>

      {status === 'LOADING' && (
        <Spin
          size="large"
          style={{ display: 'grid', placeContent: 'center', margin: '32px 0' }}
        />
      )}

      <Menu
        theme="dark"
        selectedKeys={[category ?? '']}
        mode="inline"
        items={items}
        onSelect={handleSelect}
        onDeselect={handleDeselect}
      />
    </>
  )
}

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}
