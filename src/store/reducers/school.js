import { handleActions } from 'redux-actions'
import { SCHOOLINFO } from '../types/school'
export default handleActions({
  [SCHOOLINFO] (state, action) {
    let newSchoolList = state.schoolList.concat(action.payload.data.schoolList.collegesInfo)
    return {
      ...state,
      schoolList: [...newSchoolList],
      load: false
    }
  }
}, {
  schoolList: []
})