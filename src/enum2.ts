enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

export default {
  name: "枚举",
  fn: () => {
    console.log(Direction.UP);
    return `
    enum Direction {
      UP = "UP",
      DOWN = "DOWN",
      LEFT = "LEFT",
      RIGHT = "RIGHT"
    }
    // 字符串类型的枚举必须制定每个成员的值。
    console.log(Direction.UP);
    `;
  }
};
