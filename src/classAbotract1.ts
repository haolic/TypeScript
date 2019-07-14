abstract class Department {
  constructor(public name: string) {}
  printName() {
    console.log("Department name: " + this.name);
  }
  abstract printMetting(): void; // 必须在派生类里实现。
}
class AccountingDepartment extends Department {
  constructor() {
    super("acc and aud");
  }
  printMetting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }
}

export default {
  name: "抽象类",
  fn: () => {
    console.error(`[tsl] ERROR in /Users/faruxue/p/TypeScript/src/classAbotract1.ts(18,1)
    TS2511: Cannot create an instance of an abstract class.`);
    return `
    abstract class Department {
      constructor(public name: string) {}
      printName() {
        console.log("Department name: " + this.name);
      }
      abstract printMetting(): void; // 必须在派生类里实现。
    }
    class AccountingDepartment extends Department {
      constructor() {
        super('acc and aud');
      }
      printMetting(): void {
        console.log("The Accounting Department meets each Monday at 10am.")
      }
    }
    
    new AccountingDepartment();
    new Department();
    `;
  }
};
