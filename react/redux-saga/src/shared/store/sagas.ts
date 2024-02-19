import { all, fork } from 'redux-saga/effects'
import { watchFetchProducts } from '../../entities/products'
import { watchFetchProduct } from '../../entities/product'
import { watchSaveCart } from '../../entities/cart'
import { watchFetchCategories } from '../../entities/categories'

export const rootSaga = function* () {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchProduct),
    fork(watchSaveCart),
    fork(watchFetchCategories),
    // Other forks
  ])
}
