import { put, takeLatest, select } from 'redux-saga/effects'
import { axiosInstance } from '../../../api'
import { fetchProductsFailed, fetchProductsSucceeded } from './slice'

import { AxiosResponse } from 'axios'
import { FETCH_PRODUCTS_STARTED, SET_PAGINATION_CURRENT } from './constants'
import { RootState } from '../../../shared/store'

function* fetchProductsSaga() {
  try {
    const state: RootState = yield select()

    const res: AxiosResponse = yield axiosInstance.get('/products', {
      params: {
        select: ['title', 'price', 'images', 'description', 'stock'],
        limit: state.products.value.pagination.limit,
        skip: state.products.value.pagination.skip,
      },
    })
    yield put(fetchProductsSucceeded(res.data))
  } catch (err) {
    yield put(fetchProductsFailed(err))
  }
}

export function* watchFetchProducts() {
  yield takeLatest(
    [FETCH_PRODUCTS_STARTED, SET_PAGINATION_CURRENT],
    fetchProductsSaga,
  )
}
