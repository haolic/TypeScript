interface Func {
  (num: number, name: string): boolean;
}

const func: Func = (num, name) => {
  console.log(`%c
interface Func {
    (num: number, name: string): boolean;
}

const func: Func = (num, name) => {
    if (num > 3) {
        return true;
    }
    if (name === 'tom') {
        return false;
    }
    return true;
}`, 'background: #f90');
  if (num > 3) {
    return true;
  }
  if (name === 'tom') {
    return false;
  }
  return true;
};

export default {
  name: '函数类型',
  fn: func
};
