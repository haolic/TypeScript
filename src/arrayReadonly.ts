const arrayReadonly = () => {
  let a: number[] = [1, 2, 3, 4];
  let or: ReadonlyArray<number> = a;
  console.log(or, 'readonly')
//   or[0] = 0; // error
  a = or as number[];
  console.log(a);
  a[0] = 5;
  console.log(a);
};
const func = (): string => {
  return `
  const arrayReadonly = () => {
    let a: number[] = [1, 2, 3, 4];
    let or: ReadonlyArray<number> = a;
    console.log(or, 'readonly')
    // or[0] = 0; // error
    a = or as number[];
    console.log(a);
    a[0] = 5;
    console.log(a);
  };
  `
}
export default { name: "arrayReadonly", fn: func };
