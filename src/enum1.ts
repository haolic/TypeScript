enum Direction {
  A,
  B,
  C,
  D
}

export default {
  name: '枚举',
  fn: () => {
    console.log(Direction.A);
    return `
    enum Direction {
      A,
      B,
      C,
      D
    }
    console.log(Direction.A);
    `
  }
}