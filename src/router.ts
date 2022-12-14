import { Router } from 'itty-router'
import { fetchPermenantCode, fetchTempCode, genTempCode } from './api/fetchCode'
import { fetchInfo } from './api/fetchInfo'
import { fetchRecords } from './api/fetchRecords'
import { getToken, login } from './api/login'
import { auth } from './middleware/auth'
import { preflight } from './middleware/cors'

const router = Router()

router
  .get('/', () => new Response('Hello world!'))
  .all('*', auth, preflight)
  .post('/auth', getToken)
  .post('/login', login)
  .get('/user/code/temp', fetchTempCode)
  .post('/user/code/temp', genTempCode)
  .get('/user/code/permenant', fetchPermenantCode)
  .get('/user/info', fetchInfo)
  .get('/user/records/consume', fetchRecords)
  .post('/user/code/permenant')

export default router
