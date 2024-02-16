import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProductStarted } from '../../../entities/product'

type Props = {
  id?: string
}

export const Product = memo(({ id }: Props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchProductStarted(id))
    }
  }, [dispatch, id])

  return <>PRODUCT</>
})
