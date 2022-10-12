import { Router } from 'itty-router'
import { fetchPermenantCode, fetchTempCode, genTempCode } from './api/fetchCode'
import { fetchInfo } from './api/fetchInfo'
import { getToken, login } from './api/login'
import { auth } from './middleware/auth'

const router = Router()

router
  .get('/', () => new Response('Hello world!'))
  .all('*', auth)
  .post('/auth', getToken)
  .post('/login', login)
  .get('/get-temp-code', fetchTempCode)
  .post('/gen-temp-code', genTempCode)
  .get('/get-permenant-code', fetchPermenantCode)
  .get('/get-info', fetchInfo)
  .post('/gen-permenant-code')

export default router
