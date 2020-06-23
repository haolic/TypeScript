function fanxing<T>(str: T): T {
  return str;
}
const generics = <T>(str: T): T => {
  return str;
};

export default {
  name: '泛型Hello, world!',
  fn: () => {
    console.log(fanxing('123123'));
    console.log(generics('generics'));
    return `
  function fanxing<T>(str: T): T {
    return str;
  }
  const generics = <T>(str: T): T => {
    return str;
  };
  console.log(fanxing("123123"));
  console.log(generics("generics"));
  export default {
  `;
  },
};
