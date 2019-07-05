class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('woof! woof!');
  }
}

export default {
  name: '类继承',
  fn: () => {
    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
    return `
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(Animal moved \${distanceInMeters}m.);
  }
}

class Dog extends Animal {
  bark() {
    console.log('woof! woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();    
    `;
  }
};
