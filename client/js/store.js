import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
//import { fetchStatus } from './actions'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore)

export const store = createStoreWithMiddleware(rootReducer)

//store.dispatch(fetchStatus())
