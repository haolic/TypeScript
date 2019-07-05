class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

export default {
  name: '公共属性修饰符',
  fn: () => {
    const an = new Animal('dog');
    an.move(30);
    return `
// ts类中属性默认为公共属性。
class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(\`\${this.name} moved \${distanceInMeters}m.\`);
  }
}
const an = new Animal('dog');
an.move(30);
    `
  }
}