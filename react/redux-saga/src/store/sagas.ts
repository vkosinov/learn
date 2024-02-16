import { all, fork } from 'redux-saga/effects'
import { watchFetchProducts } from '../entities/products'
import { watchFetchProduct } from '../entities/product'

export const rootSaga = function* () {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchProduct),
    // Other forks
  ])
}
