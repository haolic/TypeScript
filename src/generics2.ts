function generics<T>(str: Array<T>): Array<T> {
  console.log(str.length);
  return str;
}

export default {
  name: "泛型",
  fn: () => {
    generics(["generics"]);
    return `
function generics<T> (str: Array<T>): Array<T> {
  console.log(str.length);
  return str;
}
generics(["generics"]);
    `;
  }
};
