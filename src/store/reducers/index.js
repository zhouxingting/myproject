import { combineReducers } from 'redux'
import counter from './counter'
import school from './school'

export default combineReducers({
  counter,
  school
})