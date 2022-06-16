export default [
  {
    url: '/api/mock/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: ['tom', 'jerry']
      }
    }
  }
]
