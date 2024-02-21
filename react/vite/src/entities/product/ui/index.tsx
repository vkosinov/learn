import {
  Card,
  Descriptions,
  Image,
  Typography,
  Flex,
  Button,
  Breadcrumb,
} from 'antd'
import { getIsAddedCart } from '../../../shared/utils'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../shared/store'
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { MouseEventHandler } from 'react'
import { CartItem, add, remove } from '../../cart'
const { Title, Paragraph } = Typography

type Props = {
  id: number
  title: string
  description: string
  thumbnail: string
  stock: number
  brand: string
  category: string
  rating: number
  price: number
  images: string[]
}

export const ProductInfo = ({
  title,
  description,
  thumbnail,
  stock,
  brand,
  category,
  rating,
  price,
  images,
  id,
}: Props) => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart.value)

  const isAddedCart = getIsAddedCart(cart, id)

  const handleAdd: MouseEventHandler<HTMLElement> = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    const cartItem: CartItem = {
      id,
      img: thumbnail,
      title,
      price,
      stock,
      count: 1,
    }

    dispatch(add(cartItem))
  }

  const handleRemove: MouseEventHandler<HTMLElement> = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    dispatch(remove(id))
  }

  return (
    <Card>
      <Breadcrumb items={[{ title: <a href="/">Home</a> }, { title: title }]} />

      <Title>{title}</Title>
      <Flex gap="middle">
        <Image src={thumbnail} />

        <Flex gap="middle" vertical>
          {images.map((img) => (
            <Image src={img} width={80} key={img} />
          ))}
        </Flex>
      </Flex>
      <Paragraph style={{ marginTop: 16 }}>{description}</Paragraph>
      <Descriptions title={'Характеристики'} style={{ marginTop: 32 }}>
        <Descriptions.Item label="Количество">{stock}</Descriptions.Item>
        <Descriptions.Item label="Брэнд">{brand}</Descriptions.Item>
        <Descriptions.Item label="Категория">{category}</Descriptions.Item>
        <Descriptions.Item label="Рейтинг">{rating}</Descriptions.Item>
      </Descriptions>

      <Flex justify="space-between" align={'center'}>
        <Title level={2}>{price} V-RUB</Title>

        {!isAddedCart && (
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            onClick={handleAdd}
            size="large"
          >
            Add to cart
          </Button>
        )}

        {isAddedCart && (
          <Button
            danger
            type="primary"
            icon={<DeleteOutlined />}
            onClick={handleRemove}
            size="large"
          >
            Remove from cart
          </Button>
        )}
      </Flex>
    </Card>
  )
}
