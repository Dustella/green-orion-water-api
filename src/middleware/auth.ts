import type { IIRequest } from '../types/Requests'

export const auth = async (request: IIRequest): Promise<void> => {
  // get authoirzation header
  const auth = request.headers.get('Authorization')
  request.token = auth
}
