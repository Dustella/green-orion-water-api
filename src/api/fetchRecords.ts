import type { IRequest } from '../types/Requests'
import type { ConsumeRecord as Record } from '../types/Records'

export const fetchRecords = async (req: IRequest) => {
  const auth = req.token
  // https://app.njchengshan.cn/water/app/customer/AppConsumRecord/loadRecordList.action
  const res = await fetch(
    'https://app.njchengshan.cn/water/app/customer/AppConsumRecord/loadRecordList.action',
    {
      headers: {
        cookie: auth,
      },
    },
  )
  const records = await res.json() as Record[]
  return new Response(JSON.stringify(records))
}
