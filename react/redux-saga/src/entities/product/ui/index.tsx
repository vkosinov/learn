import { Card, Descriptions, Image, Typography, Flex } from 'antd'
const { Title, Paragraph, Text } = Typography

type Props = {
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
}: Props) => {
  return (
    <Card>
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

      <Text>{price} V-RUB</Text>
    </Card>
  )
}
