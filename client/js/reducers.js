import { combineReducers } from 'redux'
import {
  REQUEST_STATUS, RECEIVE_STATUS
} from './actions'

const initialState = {
  isFetching: false,
  offices: []
}

function officeStatus(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STATUS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_STATUS:
      return Object.assign({}, state, {
        isFetching: false,
        offices: action.offices,
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  officeStatus
})

export default rootReducer
