export type ElementType<T> = T extends (infer U)[] ? U : never;
export type ReturnType<T> = T extends (...args: never[]) => infer R ? R : never;
export type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R> ? R : never;

export const decode = async (body: ReadableStream) =>
  new TextDecoder().decode((await body.getReader().read()).value);

export const getDate = () =>
  new Date().toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }); // yyyy/MM/dd hh:mm:ss

export const stringifyParams = (obj: { [key: string]: any }) => {
  const objToString = {} as { [key: string]: string };
  for (const key of Object.keys(obj)) {
    objToString[key] = encodeURIComponent(String(obj[key]));
  }
  return objToString;
};

export const getObject = (params: URLSearchParams) => {
  const paramObj = {} as { [key: string]: string };
  for (const [key, value] of params) {
    paramObj[key] = value;
  }
  return paramObj;
};

export const toTitleCase = (word: string) => {
  const convert = (str: string, fac: string = " ") =>
    str
      .split(new RegExp(fac))
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(fac);
  return convert(convert(word.toLowerCase(), "-"));
};

export const print = (text: string, num = 50) => {
  const bar = "\n" + "*".repeat(num) + "\n";
  const msg = text.trim().replace(/\r?\n{2,}/, "\n");
  console.log(bar + msg + bar);
  return;
};

export const sortObject = (objectArray: { [key: string]: any }[], key: string) =>
  objectArray.sort((a, b) => a[key].localeCompare(b[key]));

export const uniqueObject = (objectArray: { [key: string]: any }[], keys: string[]) =>
  objectArray.filter((item, index, self) => {
    const concatItemKeys = keys.map((key) => item[key]).join("-");
    return (
      self.findIndex((obj) => {
        const concatObjKeys = keys.map((key) => obj[key]).join("-");
        return concatItemKeys == concatObjKeys;
      }) === index
    );
  });
