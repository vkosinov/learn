import createSagaMiddleware from 'redux-saga'
import { Tuple, configureStore } from '@reduxjs/toolkit'
import { rootReducers } from './reducers'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducers,
  middleware: () => new Tuple(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
