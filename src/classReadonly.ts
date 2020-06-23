class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus('一个人有八个腿。');

// dad.name = "一个人有三部分";

export default {
  name: 'readonly属性',
  fn: () => {
    console.error(`[tsl] ERROR in /Users/haolichong/faruxue/TypeScript/src/classReadonly.ts(15,9)
    TS2540: Cannot assign to 'name' because it is a read-only property.`);
    return `
    class Octopus {
      readonly name: string;
      readonly numberOfLegs: number = 8;
      constructor (theName: string) {
        this.name = theName;
      }
    }
    let dad = new Octopus("一个人有八条腿。");
    
    dad.name = "一个人有三部分";
    `;
  },
};
