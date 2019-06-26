const readonly = () => {
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  const p1: Point = { x: 10, y: 20 };
  // p1.x = 5;  // error
};
readonly();
