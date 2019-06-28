const func = (): string => {
  return `
interface Func {
  (num: number, name: string): boolean;
}

const func: Func = (num:number, name:string): boolean => {
  if (num > 3) {
    return true;
  }
  if (name === 'tom') {
    return false;
  }
  return true;
}`;
};
export default {
  name: '函数类型1',
  fn: func
};
