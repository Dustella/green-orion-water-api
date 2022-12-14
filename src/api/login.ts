import type { IRequest } from 'itty-router'

/**
 * @param request 登录
 * @return code 凭证，失败为
 */
const login = async (request: IRequest): Promise<Response> => {
  const { name, pass } = (await request.json()) as {
    name: string
    pass: string
  }
  const res = await fetch(
    `https://app.njchengshan.cn//water/app/login/checkLogin.action?loginname=${name}&password=${pass}`,
  )
  const data = (await res.json()) as { success: boolean; message: string }
  return new Response(JSON.stringify(data))
}

/**
 * @param request
 * @returns
 */
const getToken = async (request: IRequest) => {
  const { auth } = (await request.json()) as { auth: string }
  const res = await fetch(
    `https://app.njchengshan.cn/water/app/login/loginByToken.action?TOKEN=${auth}`,
  )
  const token = res.headers.get('set-cookie')
  const success = (await res.json() as { success: boolean }).success
  return new Response(JSON.stringify({ success, token }))
}

export { login, getToken }
