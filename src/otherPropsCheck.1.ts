interface Config {
  color?: string;
  width?: number;
  [propName: string]: any;
}
const otherPropsCheck = (config: Config): { color: string; area: number } => {
  const result = {
    color: config.color,
    area: config.width * config.width,
  };
  console.log(result, config);
  return result;
};

const func = (): string => {
  return `
  interface Config {
    color?: string;
    width?: number;
    [propName: string]: any;
  }
  const otherPropsCheck = (config: Config): { color: string; area: number } => {
    const result = {
      color: config.color,
      area: config.width * config.width
    };
    console.log(result, config);
    return result;
  };
  `;
};
export default {
  name: '额外的属性检查1',
  // fn: () => otherPropsCheck({ color: "red" })
  fn: func,
};
