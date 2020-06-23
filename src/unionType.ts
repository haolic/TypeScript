const unionType = (count: number | string): boolean => {
  return Number(count) > 3;
};

export default {
  name: '联合类型',
  fn: () => `
const unionType = (count: number | string): boolean => {
  return Number(count) > 3;
};
  `,
};
