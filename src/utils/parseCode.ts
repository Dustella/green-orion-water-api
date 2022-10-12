// import { JSDOM } from "jsdom";
import type { PermenantCode, TempCode, UserInfo } from '../types/UserInfo'
import { transform } from './transformer'
/**
 *
 * @param htmlstring
 * @returns
 */
const parseInfo = async (htmlstring: Response): Promise<UserInfo> => {
  const res = {} as UserInfo
  const { keys, values } = await transform(htmlstring)
  keys.forEach((item, key) => {
    switch (item) {
      case '手机号码':
        res.phone = values[key]; break
      case '姓名':
        res.name = values[key]; break
      case '绑定学校':
        res.school = values[key]; break
      case '账户余额':
        res.balance = values[key]; break
    }
  })
  return res
  // const dom = new JSDOM(htmlstring);
  // const all = dom.window.document.querySelectorAll(".item-inner");
  // const obj = {} as UserInfo;
  // all.forEach((i) => {
  //   if (i.children[1].children.length != 1) return;
  //   const key = i.children[0].children[0].innerHTML;
  //   const value = i.children[1].children[0].innerHTML.trim();
  //   switch (key) {
  //     case "手机号码":
  //       obj.phone = value;
  //     case "姓名":
  //       obj.name = value;
  //     case "账户余额":
  //       obj.money = value;
  //     case "绑定学校":
  //       obj.school = value;
  //   }
  // });
}

const parseTempCode = async (htmlstring: Response): Promise<TempCode[]> => {
  const { keys, values } = await transform(htmlstring)

  return keys.map((item, key) => ({
    code: item,
    createdAt: values[2 * key],
    expires: values[2 * key + 1],
  }))
}

const parsePermenantCode = async (
  htmlstring: Response,
): Promise<PermenantCode> => {
  const res = {} as PermenantCode

  const { keys, values } = await transform(htmlstring)
  keys.forEach((item, key) => {
    switch (item) {
      case '绑定学校':
        res.school = values[key]; break
      case '固定码':
        res.code = values[key]; break
      case '推送类型':
        res.push = values[key]; break
      case '截止时间':
        res.expires = values[key]; break
    }
  })
  return res
}

export { parseInfo, parsePermenantCode, parseTempCode }
