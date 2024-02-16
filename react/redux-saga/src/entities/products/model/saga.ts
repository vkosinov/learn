import { put, takeLatest } from 'redux-saga/effects'
import { axiosInstance } from '../../../api'
import { fetchProductsFailed, fetchProductsSucceeded } from './slice'

import type { ProductsState } from '../types'
import { AxiosResponse } from 'axios'
import { FETCH_PRODUCTS_STARTED } from './constants'

function* fetchProductsSaga() {
  try {
    const res: AxiosResponse<ProductsState> = yield axiosInstance.get(
      '/products?select=title,price,images,description'
    )
    yield put(fetchProductsSucceeded(res.data))
  } catch (err) {
    yield put(fetchProductsFailed(err))
  }
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS_STARTED, fetchProductsSaga)
}
