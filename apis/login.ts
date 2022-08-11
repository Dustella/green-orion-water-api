import axios from "axios";
import { token } from "../secrets";

/**
 * @param name 登录
 * @param pass 密码
 * @return code 凭证，失败为
 */
const login = async (name: string, pass: string): Promise<string> => {
  const res = await axios.post(
    `https://app.njchengshan.cn//water/app/login/checkLogin.action?loginname=${name}&password=${pass}`
  );
  return res.data.success ? res.data.message : "";
};

/**
 *
 * @param auth 签发的token
 * @returns
 */
const getToken = async (auth: string) => {
  const res = await axios.post(
    `https://app.njchengshan.cn/water/app/login/loginByToken.action?TOKEN=${auth}`
  );
  if (res.data.success) {
    return res.headers["set-cookie"];
  } else {
    return "";
  }
};

const res = await getToken(token)

export { login };
