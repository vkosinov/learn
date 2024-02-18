import { Pagination as AntdPagination } from 'antd'
import { RootState } from '../../../shared/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  setPaginationSkip,
  setPaginationLimit,
} from '../../../entities/products'

export const Pagination = () => {
  const dispatch = useDispatch()

  const pagination = useSelector(
    (state: RootState) => state.products.value.pagination,
  )

  const handleChange = (page: number, pageSize: number) => {
    if (pageSize !== pagination.limit) {
      dispatch(setPaginationLimit(pageSize))
      return
    }

    dispatch(setPaginationSkip((page - 1) * pageSize))
  }

  return (
    <AntdPagination
      style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}
      total={pagination.total}
      pageSize={pagination.limit}
      onChange={handleChange}
    />
  )
}
