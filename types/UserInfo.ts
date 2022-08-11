export interface UserInfo {
  phone: string;
  name: string;
  money: string;
  school: string;
}

export interface TempCode {
  code: number;
  createdAt: string;
  expires: string;
}

export interface PermenantCode {
  code: number;
  school: string;
  expires: string;
  push: string;
}
