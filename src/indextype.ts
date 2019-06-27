interface IndexType {
  0: number;
  1: number;
  3: string;
  4: number;
}

const testarr: IndexType = [1, 3, "3", "4", 8];

interface IndexType2 {
  [index: number]: string;
}

const testarr2: IndexType2 = ["d", "2"];
const func = (): string => {
  console.log(`%c
  interface IndexType {
    0: number;
    1: number;
    3: string;
    4: number;
  }
  
  const testarr: IndexType = [1, 3, "3", "4", 8];

  interface IndexType2 {
    [index: number]: string;
  }
  
  const testarr2: IndexType2 = ["d", "2"];
  `, 'border: 1px solid #f90');
  return "";
};
export default {
  name: "索引类型",
  fn: func
};
