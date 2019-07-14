abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('moving...');
  }
}

export default {
  name: '抽象类',
  fn: () => {
    console.error(`[tsl] ERROR in /Users/faruxue/p/TypeScript/src/classAbstract.ts(11,20)
    TS2511: Cannot create an instance of an abstract class.`)
    return `
    abstract class Animal {
      abstract makeSound(): void;
      move(): void {
        console.log('moving...');
      }
    }
    const animal = new Animal();
    `
  }
}