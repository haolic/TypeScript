let passcode = 'secret passcode';

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode === 'secret passcode') {
      this._fullName = newName;
    } else {
      console.log('Error: Unauthorized update of employee');
    }
  }
}

export default {
  name: '存取器',
  fn: () => {
    passcode = 'secret passcode';
    const employee = new Employee();
    employee.fullName = 'Bob Smith';
    passcode = 'ddddd';
    const employee2 = new Employee();
    employee2.fullName = 'Bob Smith';
    return `
const passcode = "secret passcode";

class Employee {
  private _fullName: string;
  
  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode === "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee");
    }
  }
}
passcode = "secret passcode"
const employee = new Employee();
employee.fullName = "Bob Smith";
passcode = "ddddd";
const employee2 = new Employee();
employee2.fullName = "Bob Smith";
    `;
  },
};
