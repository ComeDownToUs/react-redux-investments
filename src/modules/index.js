import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as modal } from 'redux-modal'
import { reducer as form } from 'redux-form'
import loans from './loans'

export default combineReducers({
  routing: routerReducer,
  loans,
  modal,
  form,
})

