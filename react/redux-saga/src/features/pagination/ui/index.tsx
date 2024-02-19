import { Pagination as AntdPagination } from 'antd'
import { RootState } from '../../../shared/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  setPaginationLimit,
  setPaginationCurrent,
} from '../../../entities/products'

export const Pagination = () => {
  const dispatch = useDispatch()

  const pagination = useSelector(
    (state: RootState) => state.products.value.pagination
  )

  const handleChange = (page: number, pageSize: number) => {
    if (pageSize !== pagination.limit) {
      dispatch(setPaginationLimit(pageSize))
      return
    }

    dispatch(setPaginationCurrent(page))
  }

  if (pagination.total <= pagination.limit) {
    return null
  }

  return (
    <AntdPagination
      style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}
      total={pagination.total}
      pageSize={pagination.limit}
      onChange={handleChange}
      current={pagination.current}
    />
  )
}
