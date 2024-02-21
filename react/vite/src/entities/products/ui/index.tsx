import { memo } from 'react'
import { Card } from 'antd'
import styles from './product.module.css'
import { Link } from 'react-router-dom'

import { ProductCart } from './product-cart'

type Props = {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
  stock: number
}

export const ProductCard = memo(
  ({ id, thumbnail, title, description, price, stock }: Props) => {
    const cover = <img alt={title} src={thumbnail} className={styles.img} />

    return (
      <Link to={`/product/${id}`}>
        <Card hoverable cover={cover}>
          <h3>{title}</h3>

          <p className={styles.description}>{description}</p>

          <div className={styles.footer}>
            <b>{price} V-RUB</b>

            <ProductCart
              id={id}
              img={thumbnail}
              title={title}
              description={description}
              price={price}
              stock={stock}
            />
          </div>
        </Card>
      </Link>
    )
  },
)
