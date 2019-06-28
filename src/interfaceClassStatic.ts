const func = () => {
  interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
  }
  interface ClockInterface {
    tick(): any;
  }

  function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
  ): ClockInterface {
    return new ctor(hour, minute);
  }

  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log('beep beep');
    }
  }
  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log('tick tock');
    }
  }

  let digital = createClock(DigitalClock, 12, 17);
  let analog = createClock(AnalogClock, 7, 32);
  console.log(digital, analog);
  return (
`
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): any;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep');
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock');
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
`
  )
};
export default {
  name: '类静态部分与实例部分',
  fn: func
};
