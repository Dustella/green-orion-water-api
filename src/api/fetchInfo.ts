// https://app.njchengshan.cn/water/app/usercenter/ownerCenter.action, get html

import { parseInfo } from '../utils/parseCode'
import type { IRequest } from '../types/Requests'

export const fetchInfo = async (request: IRequest) => {
  const auth = request.token
  const res = await fetch(
    'https://app.njchengshan.cn/water/app/usercenter/ownerCenter.action',
    {
      headers: {
        cookie: auth,
      },
    },
  )
  const info = await parseInfo(res)
  return new Response(JSON.stringify(info))
}
