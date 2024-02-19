import { Menu, MenuProps, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../shared/store'
import { fetchCategoriesStarted } from '../../../entities/categories'

const { Title } = Typography

export const CategoryFilter = () => {
  const dispatch = useDispatch()
  const categories = useSelector(
    (state: RootState) => state.categories.value.data,
  )

  useEffect(() => {
    if (!categories) {
      dispatch(fetchCategoriesStarted())
    }
  }, [dispatch, categories])

  const items = categories ? categories.map((item) => getItem(item, item)) : []

  return (
    <>
      <Title level={3} style={{ color: '#fff', paddingLeft: 24 }}>
        Category
      </Title>

      <Menu
        theme="dark"
        defaultSelectedKeys={['0']}
        mode="inline"
        items={items}
      ></Menu>
    </>
  )
}

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}
