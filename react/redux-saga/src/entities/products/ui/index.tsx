import { MouseEventHandler, memo } from 'react'
import { Button, Card, Flex, Typography } from 'antd'
import styles from './product.module.css'
import { Link } from 'react-router-dom'
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { CartItem, add, remove } from '../../cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../shared/store'
import { getIsAddedCart } from '../../../shared/utils'

type Props = {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
  stock: number
}

const { Meta } = Card
const { Paragraph } = Typography

export const ProductCard = memo(
  ({ id, thumbnail, title, description, price, stock }: Props) => {
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
      <Link to={`/product/${id}`}>
        <Card
          hoverable
          cover={<img alt={title} src={thumbnail} className={styles.img} />}
        >
          <Meta title={title} />

          <Paragraph className={styles.description}>{description}</Paragraph>

          <Flex align={'center'} justify={'space-between'}>
            <b>{price} V-RUB</b>

            {!isAddedCart && (
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                onClick={handleAdd}
              />
            )}

            {isAddedCart && (
              <Button
                danger
                type="primary"
                icon={<DeleteOutlined />}
                onClick={handleRemove}
              />
            )}
          </Flex>
        </Card>
      </Link>
    )
  },
)
