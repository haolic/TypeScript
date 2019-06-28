const func = () => {
  interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): any;
  }

  class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {

    }
    constructor(h: number, m: number) {}
  }
  console.log(new Clock(11, 30));

  return (
    `
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): any;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    
  }
  constructor(h: number, m: number) {}
}

new Clock(11, 30)
`
  );
};
export default {
  name: '类接口',
  fn: func
};
