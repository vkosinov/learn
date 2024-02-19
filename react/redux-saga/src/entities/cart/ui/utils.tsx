import { Button, Flex, TableColumnsType } from 'antd'
import { CartItem } from '../types'
import { Image } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

export const getColumns = (
  onRemove: (id: number) => void,
): TableColumnsType<CartItem> => [
  {
    title: 'Img',
    dataIndex: 'img',
    key: 'img',
    render: (src) => <Image src={src} width={64} />,
    width: '10%',
  },
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { title: 'Stock', dataIndex: 'stock', key: 'stock', width: '10%' },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    width: '15%',
    render: (price) => <b>{price} V-RUB</b>,
  },
  {
    title: 'Action',
    dataIndex: 'id',
    key: 'remove',
    width: '5%',
    render: (id) => (
      <Button
        danger
        type="primary"
        icon={<DeleteOutlined />}
        onClick={() => onRemove(id)}
      />
    ),
  },
]

export const getFooter = (cart: CartItem[]) => () => {
  if (cart.length === 0) {
    return null
  }

  const sum = cart.reduce((acc, item) => (acc += item.price), 0)

  return (
    <Flex justify="end">
      <b>SUM: {sum} V-RUB</b>
    </Flex>
  )
}
