import request from '@/utils/request'

export const getInfo = (token) => {
  return request({
    url: '/user/info',
    method: 'get'
  })
}
