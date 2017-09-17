import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as modal } from 'redux-modal'
import loans from './loans'

export default combineReducers({
  routing: routerReducer,
  loans,
  modal,
})

