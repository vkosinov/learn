import { put, takeLatest, select } from 'redux-saga/effects'
import { api } from '../../../api'
import { fetchProductsFailed, fetchProductsSucceeded } from './slice'

import { AxiosResponse } from 'axios'
import {
  FETCH_PRODUCTS_STARTED,
  SET_PAGINATION_CURRENT,
  SET_PAGINATION_LIMIT,
  SET_PRODUCTS_CATEGORY,
} from './constants'
import { RootState } from '../../../shared/store'

function* fetchProductsSaga() {
  try {
    const state: RootState = yield select()

    const {
      pagination: { limit, skip },
      category,
    } = state.products.value

    const res: AxiosResponse = yield api.getProducts({ limit, skip, category })
    yield put(fetchProductsSucceeded(res.data))
  } catch (err) {
    yield put(fetchProductsFailed(err))
  }
}

export function* watchFetchProducts() {
  yield takeLatest(
    [
      FETCH_PRODUCTS_STARTED,
      SET_PAGINATION_CURRENT,
      SET_PAGINATION_LIMIT,
      SET_PRODUCTS_CATEGORY,
    ],
    fetchProductsSaga
  )
}
