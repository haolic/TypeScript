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
// 接口合并了但是不会用合并后的接口🤔🤔🤔
// const dog: Animal = {
//   walk(num: string | number) {
//     return 10;
//   }
// };

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
  // 接口合并了但是不会用合并后的接口🤔🤔🤔
  // const dog: Animal = {
  //   walk(num: string | number) {
  //     return 10;
  //   }
  // };
    `;
  }
};
