import * as API from '../api'
import request from '@/utils/request'

// 获取大学列表信息
export async function getHightSchool(params) {
  return request(API.ENDPOINT_GZHOST + `/api/rest/select/universitys`, {
    method: 'POST',
    data: params
  })
}