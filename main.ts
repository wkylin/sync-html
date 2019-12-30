// 为什么不扩展 Error、Array、Map 内置函数
//在 ES2015 中，返回一个对象的构造函数将 this 的值隐式替换为 super(...) 的任何调用者。这对于构造函数代码捕获 super(...) 的任何潜在返回值并将其替换为 this 是必要的。

class MyError extends Error {
  constructor(m: string) {
    super(m);
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MyError.prototype);
  }
  sayHello() {
    return 'hello ' + this.message;
  }
}

const myError = new MyError('my error');
console.log(myError.sayHello());
// TypeError: myError.sayHello is not a function

//
// function f({ x }: { x: number }) {
//   // OK
//   console.log(x);
// }

// function f({ x: number }) {
//   // Error, x is not defined?
//   console.log(x);
// }

class Empty {
  /* empty */
}

let e2: Empty = 22;

// console.log(e2);

//库本身没有类型定义, 也没有相关的@type 那只能自己声明一个了. 随便举个栗子.
//declare module “lodash”  环境声明
// 类型声明空间
// declare type JQuery = any;
// declare var $: JQuery;
// 快速的定义一个全局模块
// declare module 'jquery';

// 别名
type StrOrNum = string | number;
type Text = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;

let arr : Coordinates;
arr = [3, 2]

let text: Text;
text = '111';

let text2 = {
  text: '22'
};

// 使用
let sample: StrOrNum;
sample = 123;
sample = '123';

// 会检查类型
// sample = true; // Error




import {someType, someVar} from './foo';

const bar = someVar;

console.log(bar);
// console.log(someType)

function logClass(target:any){
  let original = target;
  // console.log('target>>:', target);

  // function construct(constructor:any, args:any){
  //   let c:any = function(this: any){
  //     return constructor.apply(this, args);
  //   };
  //   c.prototype = constructor.prototype;
  //   return new c();
  // }

  // let f: any = function(...args:any){
  //   console.log("New>>:", original.name);
  //   return construct(original, args);
  // };
  //
  // f.prototype = original.prototype;
  // return f;
}

@logClass
class Base{
  name:string;
  sex: number;
  constructor(name:string, sex:number) {
    this.name = name;
    this.sex = sex;
  }
  public method1() { return 1;};
  public method2() { return 2;};
}

// let base = new Base('w', 1);

// class Base{
//   public method1() { return 1;};
//   public method2() { return 2;};
// }
//
// class Derived extends Base{
//   public method2(){ return 3;};
//   public method3(){ return 4;}
// }
//
// const derived = new Derived();
// console.log(derived.method1());
// console.log(derived.method2());
// console.log(derived.method3());
// console.log(derived.method4());


module CustomException{
  export declare class Error{
    name:string;
    message:string;
    stack:string;
    constructor(message?: string);
  }


  export class Exception extends Error{
    constructor(message:string) {
      super(message);
      this.name='Exception';
      this.message = message;
      this.stack =(<any>new Error).stack;
    }

    toString() {
      return `${this.name}: ${this.message}`
    }
  }
}





// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;
// let colorName: string = Color[2];
// console.log(c);
// console.log(colorName);
//
// let age:number = 1;


// interface Person {
//   name: string;
//   age?: number | undefined;
//   [propName: string]: string;
// }
//
// let tom: Person = {
//   name: 'Tom',
//   age: 25,
//   gender: 'male',
//   books: 'js'
// };

// function sum() {
//   let args: IArguments = arguments;
// }
// function func(a:number) {
//   arguments[0] = 99;   // 更新了arguments[0] 同样更新了a
//   console.log(a);
// }
//
// func(10);
//
// enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
// console.log(Days["Sun"]); // 7
//
// let greetUnnamed : (name: string) => string;
// greetUnnamed = function(name:string):string {
//     return `Hi, ${name}`;
// };

// function add(foo:number, bar: number, foobar: number = 0): number {
//   return foo + bar + foobar;
// }

// function add(...foo:number[]): number{
//   let result = 0;
//   for(let i=0; i<foo.length; i++){
//     result += foo[i];
//   }
//
//   return result;
// }

// function add(foo:number[]): number{
//   let result = 0;
//   for(let i=0; i<foo.length; i++){
//     result += foo[i];
//   }
//
//   return result;
// }
//
// add([1,2,3]);


// class Counter{
//   private _i: number;
//   constructor() {
//     this._i = 0;
//   }
//
//   get():number{
//     return this._i;
//   }
//
//   set(val: number): void{
//     this._i = val;
//   }
//   increment(): void{
//     this._i++;
//   }
//
// }
//
// let counter = new Counter();
// // console.log(counter._i);

class Person {
  name:string;
  surname:string;
  constructor(name:string, surname:string) {
    this.name= name;
    this.surname = surname;
  }
  greet() {
    console.log(this.name);
    console.log('Hi');
  }
}

class Teacher extends Person{

  subjects: string[];

  constructor(name:string, surname:string, subjects: string[]) {
    super(name, surname);
    this.subjects =subjects;
  }

  greet(){
    super.greet();
    console.log('I teach' + this.subjects);
  }
  teach(){

    console.log('Welcome to class!');
  }
}

let teacher = new Teacher('remo', 'jansen', ['math', 'physics']);
// teacher.greet();
// teacher.teach();

