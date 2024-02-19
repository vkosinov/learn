import { takeLatest, select } from 'redux-saga/effects'

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './constants'
import { RootState } from '../../../shared/store'
import { saveToLocalStorage } from './utils/save-to-local-storage'

function* saveCartSaga() {
  try {
    const state: RootState = yield select()

    yield saveToLocalStorage(state.cart.value)
  } catch (err) {
    yield console.error(err)
  }
}

export function* watchSaveCart() {
  yield takeLatest([ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART], saveCartSaga)
}
