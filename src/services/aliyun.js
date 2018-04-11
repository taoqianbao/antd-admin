import { request, config } from 'utils'

const { api } = config
const { aliyun } = api

export function query (params) {
  const url = `${aliyun}/accountatt`
  console.error(url)
  return request({
    url,
    method: 'get',
    data: params,
  })
}
