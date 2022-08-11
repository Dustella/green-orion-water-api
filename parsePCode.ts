import { JSDOM } from "jsdom";
import { TempCode, UserInfo, PermenantCode } from "./types/UserInfo";

/**
 * 
 * @param htmlstring 
 * @returns 
 */
const parseInfo = (htmlstring: string): UserInfo => {
  const dom = new JSDOM(htmlstring);
  const all = dom.window.document.querySelectorAll(".item-inner");
  const obj = {} as UserInfo;
  all.forEach((i) => {
    if (i.children[1].children.length != 1) return;
    const key = i.children[0].children[0].innerHTML;
    const value = i.children[1].children[0].innerHTML.trim();
    switch (key) {
      case "手机号码":
        obj.phone = value;
      case "姓名":
        obj.name = value;
      case "账户余额":
        obj.money = value;
      case "绑定学校":
        obj.school = value;
    }
  });
  return obj;
};

const parseTempCode = (htmlstring: string): TempCode[] => {
  const res = [] as TempCode[];
  const dom = new JSDOM(htmlstring);
  const all = dom.window.document.querySelectorAll(".item-inner");
  all.forEach((i) => {
    const code = parseInt(i.children[0].innerHTML.trim());
    const v = i.children[1].innerHTML;
    const [createdAt, expires] = v.split("<br>");
    res.push({ code, createdAt, expires });
  });
  return res;
};

const parsePermenantCode = (htmlstring: string): PermenantCode => {
  const dom = new JSDOM(htmlstring);
  const all = dom.window.document.querySelectorAll(".item-inner");
  const res = {} as PermenantCode;
  all.forEach((i) => {
    const k = i.children[0].firstElementChild.innerHTML;
    const v = i.children[1].firstElementChild.innerHTML.trim();
    switch (k) {
      case "绑定学校":
        res.school = v;
      case "固定码":
        res.code = parseInt(v);
      case "推送类型":
        res.push = v;
      case "截止时间":
        res.expires = v;
    }
  });
  return res;
};

export { parseInfo, parsePermenantCode, parseTempCode };
