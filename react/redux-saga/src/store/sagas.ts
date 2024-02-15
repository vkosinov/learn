import { all, fork } from 'redux-saga/effects'
import { watchFetchProducts } from '../entities/product'

export const rootSaga = function* () {
  yield all([
    fork(watchFetchProducts),
    // Other forks
  ])
}
