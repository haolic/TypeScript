const func = () => {
  interface Shape {
    color: string;
  }
  interface Square extends Shape {
    sideLength: number;
  }

  let square = <Square>{};
  console.log(square);
  square.color = 'blue';
  square.sideLength = 10;

  // 继承多个接口
  interface PenStroke {
    penWidth: number;
  }

  interface NewSquare extends Shape, PenStroke {
    sideLength: number;
  }
  let newSquare = <NewSquare>{}
  newSquare.color = 'blue';
  newSquare.sideLength = 10;
  newSquare.penWidth = 5.0;
  return `
  interface Shape {
    color: string;
  }
  interface Square extends Shape {
    sideLength: number;
  }
  
  let square = <Square>{};
  console.log(square);
  square.color = 'blue';
  square.sideLength = 10;
  
  // 继承多个接口
  interface PenStroke {
    penWidth: number;
  }
  
  interface NewSquare extends Shape, PenStroke {
    sideLength: number;
  }
  let newSquare = <NewSquare>{}
  newSquare.color = 'blue';
  newSquare.sideLength = 10;
  newSquare.penWidth = 5.0;
  `;
}
export default {
  name: 'interface extends',
  fn: func
}