import { createCors } from 'itty-cors'
import { Router } from 'itty-router'
import { fetchPermenantCode, fetchTempCode, genTempCode } from './api/fetchCode'
import { fetchInfo } from './api/fetchInfo'
import { getToken, login } from './api/login'
import { auth } from './middleware/auth'

const router = Router()
const { preflight } = createCors({ origins: ['*'], maxAge: 86400, methods: ['GET', 'POST', 'OPTIONS'], headers: [] })

router
  .get('/', () => new Response('Hello world!'))
  .all('*', auth, preflight)
  .post('/auth', getToken)
  .post('/login', login)
  .get('/user/code/temp', fetchTempCode)
  .post('/user/code/temp', genTempCode)
  .get('/user/code/permenant', fetchPermenantCode)
  .get('/user/info', fetchInfo)
  .post('/user/code/permenant')

export default router
