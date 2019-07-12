class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    const xDist = point.x - Grid.origin.x;
    const yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

export default {
  name: '静态属性',
  fn: () => {
    const grid = new Grid(1);
    console.log(grid.calculateDistanceFromOrigin({ x: 3, y: 4 }));
    return `
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    const xDist = point.x - Grid.origin.x;
    const yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

const grid = new Grid(1);
console.log(grid.calculateDistanceFromOrigin({ x: 3, y: 4 }));
    `
  }
}