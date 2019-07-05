class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

export default {
  name: '私有属性修饰符',
  fn: () => {
    console.error(
      "TS2341: Property 'name' is private and only accessible within class 'Animal'."
    );

    return `
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
const dog = new Animal('dog');
console.log(dog.name);
    `;
  }
};
