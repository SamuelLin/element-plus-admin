import request from '@/utils/request'

// mock test api
export const test = (token) => {
  return request({
    url: '/mock/test',
    method: 'get'
  })
}
