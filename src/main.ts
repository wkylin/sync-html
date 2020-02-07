
class Father {
  public name: string;  //类里面 子类 其它任何地方外边都可以访问
  protected age: number; //类里面 子类 都可以访问,其它任何地方不能访问
  private money: number; //类里面可以访问， 子类和其它任何地方都不可以访问
  constructor(name:string,age:number,money:number) {//构造函数
    this.name=name;
    this.age=age;
    this.money=money;
  }
  getName():string {
    return this.name;
  }
  setName(name:string): void{
    this.name=name;
  }
}
class Child extends Father{
  constructor(name:string,age:number,money:number) {
    super(name,age,money);
  }
  desc() {
    // console.log(`${this.name} ${this.age} ${this.money}`);
  }
}

let child = new Child('zfpx',10,1000);
// console.log(child.name);
// console.log(child.age);
// console.log(child.money);


class C {
  p =12;
  m(){
    return 'abc'
  }
}

let c = new C();
// console.log(c.m());
let cl = {...c};
// console.log(cl.m());


const foo = {
  name: 'jim',
  age:18
};

let extInfo = {
  gender: 'male',
  height: 100
};

let stud = {
  ...foo,
  ...extInfo
};

// console.log(stud);




// 初始化TS Project
// $ npm i typescript -g
// # or, using Yarn:
// $ yarn global add typescript
// $ npm i typescript --save-dev
// # or, using Yarn:
// $ yarn add typescript --dev
// $ tsc --init
//$ ./node_modules/.bin/tsc --init
//  even better, simply using npx to ensure that the local version of tsc is used:
// $ npx tsc --init
// {
//   "compilerOptions": {
//     "target": "es5",
//     "module": "commonjs",
//     "strict": true,
//     "outDir": "dist",
//     "sourceMap": true
//   }
// }

// $ tsc
// # or, for local tsc:
// $ npx tsc
// $ tsc -w
// # or, for local tsc:
// $ npx tsc -w
//# for installing globally:
// $ npm i tslint --g
// # for installing locally:
// $ npm i tslint --save-dev
// # global:
// $ yarn global add tslint
// # or local:
// $ yarn add tslint --dev
// # if using global tslint:
// $ tslint --init
// # if using local tslint:
// $ npx tslint --init
// {
//   "defaultSeverity": "error",
//   "extends": [
//     "tslint:recommended"
//   ],
//   "jsRules": {},
//   "rules": {},
//   "rulesDirectory": []
// }
// $ npm install tslint-config-airbnb
// # or, using Yarn:
// $ yarn add tslint-config-airbnb
// {
//     "defaultSeverity": "error",
//     "extends": "tslint-config-airbnb",
//     "jsRules": {},
//     "rules": {
//         "eofline": false
//     },
//     "rulesDirectory": []
// }



// 每个对象都有__proto__ ( 除了 var obj = Object.create(null) )
// 每个函数对象都有 prototype。这个属性用于实现“实例化”（函数对象也是对象所以也有__proto__，即 Func.__proto__ = Function.prototype）
// 函数对象的 prototype 所指向的也是对象，所以也有 __proto__，即 Func.prototype.__proto__。这个属性用于实现“继承”



// 为什么不扩展 Error、Array、Map 内置函数
//在 ES2015 中，返回一个对象的构造函数将 this 的值隐式替换为 super(...) 的任何调用者。这对于构造函数代码捕获 super(...) 的任何潜在返回值并将其替换为 this 是必要的。

class MyError extends Error {
  constructor(m: string) {
    super(m);
    // Set the prototype explicitly.
    // Object.setPrototypeOf(this, MyError.prototype);
  }
  // sayHello() {
  //   return 'hello ' + this.message;
  // }
}

// const myError = new MyError('my error');
// console.log(myError.sayHello());
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

// // 别名
// type StrOrNum = string | number;
// type Text = string | { text: string };
// type Coordinates = [number, number];
// type Callback = (data: string) => void;
//
// let arr : Coordinates;
// arr = [3, 2];
//
// let text: Text;
// text = '111';

// let text2: Text = {
//   text: '22'
// };

// 使用
// let sample: StrOrNum;
// sample = 123;
// sample = '123';

// 会检查类型
// sample = true; // Error




// import {someType, someVar} from '../src/foo';

// const bar = someVar;

// console.log(bar);
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

// @logClass
// class Base{
//   name:string;
//   sex: number;
//   constructor(name:string, sex:number) {
//     this.name = name;
//     this.sex = sex;
//   }
//   public method1() { return 1;};
//   public method2() { return 2;};
// }

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

