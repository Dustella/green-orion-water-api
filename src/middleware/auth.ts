import type { IRequest } from '../types/Requests'

export const auth = async (request: IRequest): Promise<void> => {
  // get authoirzation header
  const auth = request.headers.get('Authorization')

  request.token = auth
}
