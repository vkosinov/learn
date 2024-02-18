import { Pagination as AntdPagination } from 'antd'
import { RootState } from '../../../shared/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  setPaginationLimit,
  fetchProductsStarted,
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
      dispatch(fetchProductsStarted())
      return
    }

    dispatch(setPaginationCurrent(page))
    dispatch(fetchProductsStarted())
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
