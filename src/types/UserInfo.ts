export interface UserInfo {
  phone: string
  name: string
  money: string
  school: string
}

export interface TempCode {
  code: string
  createdAt: string
  expires: string
}

export interface PermenantCode {
  code: string
  school: string
  expires: string
  push: string
}
