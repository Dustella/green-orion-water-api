import { Router } from 'itty-router'
import { fetchPermenantCode, fetchTempCode, genTempCode } from './api/fetchCode'
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
  .post('/gen-permenant-code')
  .get('/get-info')

export default router
