import { memo } from 'react'
import { Card, Typography } from 'antd'
import styles from './product.module.css'
import { Product } from '../types'

type Props = Product

const { Meta } = Card
const { Paragraph } = Typography

export const ProductCard = memo(({ id, images, title, description }: Props) => {
  return (
    <a href={`/product/${id}`}>
      <Card
        hoverable
        cover={<img alt={title} src={images[0]} className={styles.img} />}
      >
        <Meta title={title} />

        <Paragraph className={styles.description}>{description}</Paragraph>
      </Card>
    </a>
  )
})
