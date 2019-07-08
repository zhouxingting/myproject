import { SCHOOLINFO } from '../types/school'
import { createAction } from 'redux-actions'
import { getHightSchool } from '@/services/index'

export const asyncSchoolList = createAction(SCHOOLINFO, async (params) => {
  let schoolList = await getHightSchool(params)
  return schoolList.data
})