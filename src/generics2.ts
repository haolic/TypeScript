function generics<T>(str: Array<T>): Array<T> {
  console.log(str.length);
  return str;
}

export default {
  name: '泛型',
  fn: () => {
    generics(['generics']);
    return `
function generics<T> (str: Array<T>): Array<T> {
  console.log(str.length);
  return str;
}
generics(["generics"]);


// 泛型（Generics）是 在定义函数、接口或类的时候，不预先指定具体的类型，而是使用的时候再指定类型的一种特性。
    `;
  },
};
