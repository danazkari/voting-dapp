import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { candidates } from './candidates'

export default combineReducers({
  routing: routerReducer,
  candidates,
})
