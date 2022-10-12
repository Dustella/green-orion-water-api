// import { JSDOM } from "jsdom";
import { TempCode, UserInfo, PermenantCode } from "../types/UserInfo";

const consume = async (stream: ReadableStream) => {
  const reader = stream.getReader();
  while (!(await reader.read()).done) {
    /* NOOP */
  }
};
/**
 *
 * @param htmlstring
 * @returns
 */
const parseInfo = async (htmlstring: Response): Promise<UserInfo> => {
  const obj = {} as UserInfo;
  const transfomer = new HTMLRewriter().on(".item-inner", {
    element(el) {
      if (el.children[1].children.length != 1) return;
      const key = el.children[0].children[0].innerHTML;
      const value = el.children[1].children[0].innerHTML.trim();
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
    },
  });
  transfomer.transform(htmlstring);
  return obj;
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
};

const parseTempCode = async (htmlstring: Response): Promise<TempCode[]> => {
  const codes = [] as string[];
  const times = [] as string[];
  let tmpBuffer = "";

  const transfomer = new HTMLRewriter()
    .on(".item-title", {
      text(text) {
        tmpBuffer += text.text;
        if (text.lastInTextNode) {
          codes.push(tmpBuffer.trim());
          tmpBuffer = "";
        }
      },
    })
    .on(".item-after", {
      text(text) {
        tmpBuffer += text.text;
        if (text.lastInTextNode) {
          const expiresTime = tmpBuffer;
          times.push(expiresTime);
          tmpBuffer = "";
        }
      },
    });

  await consume(transfomer.transform(htmlstring).body!);

  return codes.map((item, key) => ({
    code: item,
    createdAt: times[2 * key],
    expires: times[2 * key + 1],
  }));
};

const parsePermenantCode = async (
  htmlstring: Response
): Promise<PermenantCode> => {
  const res = {} as PermenantCode;

  const keys = [] as string[];
  const values = [] as string[];
  let tmpBuffer = "";

  const transfomer = new HTMLRewriter()
    .on(".item-title", {
      text(text) {
        tmpBuffer += text.text;
        if (text.lastInTextNode) {
          if (tmpBuffer.trim() !== "") keys.push(tmpBuffer.trim());

          tmpBuffer = "";
        }
      },
    })
    .on(".item-after", {
      text(text) {
        tmpBuffer += text.text;
        if (text.lastInTextNode) {
          const value = tmpBuffer;
          values.push(value.trim());
          tmpBuffer = "";
        }
      },
    });
  await consume(transfomer.transform(htmlstring).body!);
  console.log(keys, values);
  keys.forEach((item, key) => {
    switch (item) {
      case "绑定学校":
        res.school = values[key];
      case "固定码":
        res.code = values[key];
      case "推送类型":
        res.push = values[key];
      case "截止时间":
        res.expires = values[key];
    }
  })
  return res;
};

export { parseInfo, parsePermenantCode, parseTempCode };
