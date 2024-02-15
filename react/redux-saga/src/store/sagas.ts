import { all, fork } from 'redux-saga/effects'
import { watchFetchProducts } from '../entities/products'

export const rootSaga = function* () {
  yield all([
    fork(watchFetchProducts),
    // Other forks
  ])
}
