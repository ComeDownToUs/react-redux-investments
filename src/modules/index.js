import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loans from './loans'

export default combineReducers({
  routing: routerReducer,
  loans,
})

