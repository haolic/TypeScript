interface Animal {
  walk(num: number): string;
}
interface Animal {
  walk(num: string): number;
}
// 相当于：
// interface Animal {
//   walk(num: number): string;
//   walk(num: string): number;
// }

const dog: Animal = {
  walk(num: string | number) {
    return 10;
  }
};

export default {
  name: '声明合并',
  fn: () => {
    return `
  interface Animal {
    walk(num: number): string;
  }
  interface Animal {
    walk(num: string): number;
  }
  // 相当于：
  // interface Animal {
  //   walk(num: number): string;
  //   walk(num: string): number;
  // }
  
  const dog: Animal = {
    walk(num: string | number) {
      return 10;
    }
  };
    `;
  }
};
