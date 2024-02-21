import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { put, takeLatest } from 'redux-saga/effects'

import { fetchProductSucceeded, fetchProductFailed } from './slice'
import { api } from '../../../api'
import { ProductState } from '../types'
import { GET_PRODUCT_BY_ID } from './constants'

function* getProductSaga({ payload: id }: PayloadAction<string>) {
  try {
    const res: AxiosResponse<ProductState> = yield api.getProduct(id)
    yield put(fetchProductSucceeded(res.data))
  } catch (error) {
    yield put(fetchProductFailed(error))
  }
}

export function* watchFetchProduct() {
  yield takeLatest(GET_PRODUCT_BY_ID, getProductSaga)
}
