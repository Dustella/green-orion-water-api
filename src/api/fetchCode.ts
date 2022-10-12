import { parsePermenantCode, parseTempCode } from '../parser/parsePCode'
import type { IRequest } from '../types/Requests'

export const genTempCode = async (request: IRequest) => {
  const auth = request.token
  const res = await fetch(
    'https://app.njchengshan.cn/water/app/customer/getFetchWaterCode.action',
    {
      headers: {
        cookie: auth,
      },
    },
  )
  const data = await res.json()
  return new Response(JSON.stringify(data))
}

// https://app.njchengshan.cn/water/app/customer/AppCustomerCodeMng/list.action
export const fetchPermenantCode = async (request: IRequest) => {
  const auth = request.token
  const res = await fetch(
    'https://app.njchengshan.cn/water/app/customer/AppCustomerCodeMng/list.action',
    {
      headers: {
        cookie: auth,
      },
    },
  )
  const code = await parsePermenantCode(res)
  return new Response(JSON.stringify(code))
}

export const fetchTempCode = async (request: IRequest) => {
  const auth = request.token
  const res = await fetch(
    'https://app.njchengshan.cn/water/app/customer/fecthWater.action',
    {
      headers: {
        cookie: auth,
      },
    },
  )
  const code = await parseTempCode(res)
  return new Response(JSON.stringify(code))
}

