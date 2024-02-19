import { all, fork } from 'redux-saga/effects'
import { watchFetchProducts } from '../../entities/products'
import { watchFetchProduct } from '../../entities/product'
import { watchSaveCart } from '../../entities/cart'

export const rootSaga = function* () {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchProduct),
    fork(watchSaveCart),
    // Other forks
  ])
}
