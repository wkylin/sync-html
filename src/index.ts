
class Cat{
  private sex: string = '0';
  private name: string = 'aa' ;
  constructor( public age: number) {
    this.age = age;

  }

  sayHello(){
    console.log('Name:', this.name, this.sex);
  }
}




//接口使用： 1.断言 2. 字符串索引签名 3. 对象复制
// 修饰符： protected 在子类中可以访问，在实例中不能访问。

console.log('Try npm run check/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';
// TODO: more examples

// let str1: null = null;
// let str2: null = undefined;
// let str3: undefined = undefined;
// let str4: undefined = null;

// let str5: void = null;
let str6: void = undefined;
