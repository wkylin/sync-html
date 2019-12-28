

class Base{
  public method1() { return 1;};
  public method2() { return 2;};
}

class Derived extends Base{
  public method2(){ return 3;};
  public method3(){ return 4;}
}

const derived = new Derived();
console.log(derived.method1());
console.log(derived.method2());
console.log(derived.method3());
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
teacher.greet();
teacher.teach();

