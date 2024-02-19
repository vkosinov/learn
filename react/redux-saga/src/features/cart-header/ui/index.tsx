import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import { memo } from 'react'
import { Link } from 'react-router-dom'

type Props = { count: number }

export const CartHeader = memo(({ count }: Props) => {
  return (
    <Link to="/cart" style={{ marginLeft: 'auto' }}>
      <Badge count={count}>
        <ShoppingCartOutlined
          style={{
            fontSize: '32px',
            color: '#fdcc58',
          }}
        />
      </Badge>
    </Link>
  )
})
