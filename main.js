var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var tuple = [1, 'str'];
tuple.push('2');
console.log(tuple);
var Father = /** @class */ (function () {
    function Father(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Father.prototype.getName = function () {
        return this.name;
    };
    Father.prototype.setName = function (name) {
        this.name = name;
    };
    return Father;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, money) {
        return _super.call(this, name, age, money) || this;
    }
    Child.prototype.desc = function () {
        // console.log(`${this.name} ${this.age} ${this.money}`);
    };
    return Child;
}(Father));
var child = new Child('zfpx', 10, 1000);
// console.log(child.name);
// console.log(child.age);
// console.log(child.money);
var C = /** @class */ (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () {
        return 'abc';
    };
    return C;
}());
var c = new C();
// console.log(c.m());
var cl = __assign({}, c);
// console.log(cl.m());
var foo = {
    name: 'jim',
    age: 18
};
var extInfo = {
    gender: 'male',
    height: 100
};
var stud = __assign(__assign({}, foo), extInfo);
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
var MyError = /** @class */ (function (_super) {
    __extends(MyError, _super);
    function MyError(m) {
        return _super.call(this, m) || this;
        // Set the prototype explicitly.
        // Object.setPrototypeOf(this, MyError.prototype);
    }
    return MyError;
}(Error));
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
var Empty = /** @class */ (function () {
    function Empty() {
    }
    return Empty;
}());
var e2 = 22;
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
function logClass(target) {
    var original = target;
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
var CustomException;
(function (CustomException) {
    var Exception = /** @class */ (function (_super) {
        __extends(Exception, _super);
        function Exception(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'Exception';
            _this.message = message;
            _this.stack = (new Error).stack;
            return _this;
        }
        Exception.prototype.toString = function () {
            return this.name + ": " + this.message;
        };
        return Exception;
    }(Error));
    CustomException.Exception = Exception;
})(CustomException || (CustomException = {}));
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
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.greet = function () {
        console.log(this.name);
        console.log('Hi');
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, surname, subjects) {
        var _this = _super.call(this, name, surname) || this;
        _this.subjects = subjects;
        return _this;
    }
    Teacher.prototype.greet = function () {
        _super.prototype.greet.call(this);
        console.log('I teach' + this.subjects);
    };
    Teacher.prototype.teach = function () {
        console.log('Welcome to class!');
    };
    return Teacher;
}(Person));
var teacher = new Teacher('remo', 'jansen', ['math', 'physics']);
// teacher.greet();
// teacher.teach();
