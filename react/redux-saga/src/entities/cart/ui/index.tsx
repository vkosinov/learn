import { Button, Table } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../shared/store'

import { remove, clear } from '../model'
import { getColumns, getFooter } from './utils'

export const CardTable = () => {
  const cart = useSelector((state: RootState) => state.cart.value)
  const dispatch = useDispatch()

  const data = cart.map((item) => ({ ...item, key: item.id }))

  const handleRemove = (id: number) => {
    dispatch(remove(id))
  }

  const columns = getColumns(handleRemove)

  const handleBuy = () => {
    console.info(cart)
    dispatch(clear())
  }

  const footer = getFooter(cart)

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        footer={footer}
      />

      {data.length > 0 && (
        <Button
          danger
          type="primary"
          size="large"
          style={{ marginTop: 32, marginLeft: 'auto', display: 'flex' }}
          onClick={handleBuy}
        >
          Buy all products
        </Button>
      )}
    </>
  )
}
