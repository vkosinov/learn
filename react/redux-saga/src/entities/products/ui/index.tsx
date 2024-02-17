import { memo } from 'react'
import { Card, Typography } from 'antd'
import styles from './product.module.css'
import { Product } from '../types'
import { Link } from 'react-router-dom'

type Props = Product & {
  thumbnail: string
}

const { Meta } = Card
const { Paragraph } = Typography

export const ProductCard = memo(
  ({ id, thumbnail, title, description }: Props) => {
    return (
      <Link to={`/product/${id}`}>
        <Card
          hoverable
          cover={<img alt={title} src={thumbnail} className={styles.img} />}
        >
          <Meta title={title} />

          <Paragraph className={styles.description}>{description}</Paragraph>
        </Card>
      </Link>
    )
  }
)
