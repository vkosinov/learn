import { AxiosResponse } from 'axios'
import { put, select, takeLatest } from 'redux-saga/effects'

import { fetchCategoriesFailed, fetchCategoriesSucceeded } from './slice'
import { axiosInstance } from '../../../api'
import { GET_CATEGORIES } from './constants'
import { RootState } from '../../../shared/store'

function* getCategoriesSaga() {
  try {
    const state: RootState = yield select()

    if (state.categories.value.data) {
      yield state.categories.value.data
    }

    const res: AxiosResponse<string[]> =
      yield axiosInstance.get(`/products/categories`)
    yield put(fetchCategoriesSucceeded(res.data))
  } catch (error) {
    yield put(fetchCategoriesFailed(error))
  }
}

export function* watchFetchCategories() {
  yield takeLatest(GET_CATEGORIES, getCategoriesSaga)
}
