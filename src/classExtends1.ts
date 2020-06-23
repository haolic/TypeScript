class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('slithering...');
    super.move(distanceInMeters);
  }
}

export default {
  name: '类继承1',
  fn: () => {
    const dog = new Dog('ddog');
    dog.move(2);
    return `
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(\`\${this.name} moved \${distanceInMeters}m.\`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('slithering...');
    super.move(distanceInMeters);
  }
}

const dog = new Dog('ddog');
dog.move(2);
    `;
  },
};
