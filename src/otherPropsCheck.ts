interface Config {
  color?: string;
  width?: number;
}
const otherPropsCheck = (config: Config): { color: string; area: number } => {
  const result = {
    color: config.color,
    area: config.width * config.width
  };
  console.log(result);
  return result;
};
const func = (): string => {
  return `  interface Config {
    color?: string;
    width?: number;
  }
  const otherPropsCheck = (config: Config): { color: string; area: number } => {
    const result = {
      color: config.color,
      area: config.width * config.width
    };
    console.log(result);
    return result;
  };
  `
}
export default {
  name: "额外的属性检查",
  fn: func
  //   fn: () => otherPropsCheck({ colour: "red" }) // error
};
