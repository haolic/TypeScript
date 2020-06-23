class Person {
  protected name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

export default {
  name: 'protected属性',
  fn: () => {
    let howard = new Employee('Howard', 'Sales');
    console.log(howard.getElevatorPitch());
    console.error(`[tsl] ERROR in /Users/haolichong/faruxue/TypeScript/src/classProtected.ts(24,24)
    TS2445: Property 'name' is protected and only accessible within class 'Person' and its subclasses.`);
    return `
// protected修饰后的属性只能在派生类里访问，不能在外部访问。

class Person {
  protected name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return \`Hello, my name is \${this.name} and I work in \${this.department}.\`;
  }
}
let howard = new Employee('Howard', 'Sales');
console.log(howard.getElevatorPitch());
console.log(howard.name);
    `;
  },
};
