let array = [
  { rand: 1, id: 2 },
  { rand: 1, id: 1 },
  { rand: 1, id: 3 },
  { rand: 1, id: 3 },
];

let aRaa = array.sort((a, b) => a.id - b.id > 0 ? 1 : -1);

// console.log('array', array);
// console.log('aRaa', aRaa);

// console.log(null + 1);
// console.log(undefined +1);


// boolean 转成number string 转成number

function outer(){
  let a = 1;
  function inner(){
    let b = 2;
    function innermost(){
      let c = 3;
      console.log(a, b, c);
    }
    innermost();
    console.log(a,b);
  }
  inner();
  console.log(a)
}

// outer();

let g1 = 'g1';
let g2 = 'g2';
{
  g1 = 'new g1';
  let g2 = 'new g2';
  // console.log(g1);
  // console.log(g2);
  // console.log(g3);
  // let g3 = 'g3';
}
// console.log(g1); // no run
// console.log(g2); // no run

function sayHi(name){
  let message = `Hi, ${name}`;
  function greeting(){
    console.log(message);
  }
  return greeting;
}

let sayHiToJon = sayHi('Jon');
// console.log(sayHiToJon);
// console.log(sayHiToJon());

const arr = [10, 12, 15, 21];
// for(let i = 0; i<arr.length; i++){
//   setTimeout(() => {
//     console.log(`The value ${arr[i]} is at index: ${i}`);
//   }, i * 1000);
// }

let param = 1;
function myScope(){
  let param = 2;
  console.log(param);
}

this.prop = 1;
function myContext(){

  this.prop = 2;
  // console.log(this);
  console.log(prop);

}
// let myInstance = new myContext();
// console.log('my:',myInstance);
// console.log('win', new myContext())
// myScope();

function Dinosaur(name){
  this.name = name;
  let self = this;
  inner();
  function inner(){
    console.log(this);
    console.log(self);
  }
}
// let myDinosaur = new Dinosaur('Dino');
// console.log(myDinosaur)


function Bird() {
  this. wings = 2;
}
let fakeBird = Bird();
// console.log(fakeBird);

let realBird = new Bird();
// console.log(realBird);


function Dog(breed, name){
  this.breed = breed;
  this.name = name;
}

Dog.prototype.describe = function(){
  console.log(`${this.name} is a ${this.breed}`)
}
const rusty = new Dog('Beagle', 'Rusty');

// console.log(Dog.prototype);
// console.log(rusty);
// console.log(rusty.describe());
// console.log(rusty.__proto__);
// console.log(rusty.constructor);


// 原型链 描述了对象之间相互引用的关系
// 当获取一个对象的属性时，Javascript 引擎会先从这个对象本身
// 开始查找。如果没有找到，就会转到其原型上的属性，直到第一次找到这个属性为止。原型链
//上的最后一个对象是内置Object.prototype 而他的原型是NUll,
// 也就是原型链的终点。Js引擎在查找属性到这一层还是没有到时就会返回undefined

// for/in 不能找到继承的属性，因为是不可枚举的

function Car(){}
Car.prototype.wheels = 4;
Car.prototype.airbags = 1;
let myCar = new Car();
myCar.color = 'black';
// console.log('airbags' in myCar);
// console.log(myCar.wheels);
// console.log(myCar.year);

// console.log(myCar.hasOwnProperty('airbags'));
// console.log(myCar.hasOwnProperty('color'));

let dog = {legs: 4}
let myDog = Object.create(dog);
// console.log(myDog.hasOwnProperty('legs'));
// console.log(myDog.__proto__ === dog);
// console.log(Object.getPrototypeOf(myDog));
// console.log(Object.getOwnPropertyNames(myDog));
// console.log(Object.getOwnPropertySymbols(myDog));

let objProto = { text: 'original'}
let objAttToProto = Object.create(objProto);
// objProto.text = 'prototype changed';
// console.log(objAttToProto.text);
objProto = { text: 'replacing property'};
// console.log(objAttToProto.text);

const person = function (name){
  const message =  `Hello! My name is ${name}`;
  return {
    greeting: () => {
      console.log(this);
      console.log(message);
    },
    foo: function() {
      console.log(this);
      console.log(message);
    }
  }
}

const will = person('Will');
// will.greeting();
// will.foo();

// setTimeout方法传入的时间参数并不是函数延迟执行的时间，
// 而是事件管理器将函数移入调用栈的等待时间。

const isGreater = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a > b) {
      resolve(true)
    } else {
      reject(false)
    }
  })
}
isGreater(1, 2)
  .then(result => {
    // console.log('greater')
  })
  .catch(result => {
    // console.log('smaller')
  })

function putDookieInAnyArray(arr) {
  return [...arr, 'dookie'];
}

const result = putDookieInAnyArray(['I', 'really', "don't", 'like']);
// console.log(result);
const persons = {
  name: 'Todd',
  age: 29,
};

const copyOfTodd = { ...persons };
// console.log(copyOfTodd)

function Person(name){
  this.name = name;
}

function Student(name, studentId){
  Person.call(this, name);
  this.studentId = studentId;
}
// Student.prototype = new Person();
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let student = new Student('wkylin', '001');
// console.log(student);

function add(a, b) {
  return a + b;
}

console.log(add.call(null, ...[1, 2])); // 3
console.log(add.apply(null, [1, 2])); // 3

// 深冻结函数.
function deepFreeze(obj) {
  // 取回定义在obj上的属性名
  let propNames = Object.getOwnPropertyNames(obj);

  // 在冻结自身之前冻结属性
  propNames.forEach(function (name) {
    let prop = obj[name];

    // 如果prop是个对象，冻结它
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });

  // 冻结自身(no-op if already frozen)
  return Object.freeze(obj);
}

function deepFreeze(object) {
  let propNames = Object.getOwnPropertyNames(object);
  for (let name of propNames) {
    let value = object[name];
    object[name] = value && typeof value === "object" ?
      deepFreeze(value) : value;
  }
  return Object.freeze(object);
}

let wills = {
  name: "Leonardo",
  profession: {
    name: "developer"
  }
};
deepFreeze(person);
wills.profession.name = "doctor"; // TypeError: Cannot assign to read only property 'name' of object

let toString = Object.prototype.toString;
// console.log(toString.call(new Date));
// console.log(toString.call(new String));
// console.log(toString.call(Math));
// console.log(toString.call(undefined));
// console.log(toString.call(null));
toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]
//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
//
function distinctObj(arr, key) {
  let i, j, result = [], len = arr.length;
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (arr[i][key] === arr[j][key]) {
        j = ++i;
      }
    }
    result.push(arr[i]);
  }
  return result;
}

console.log(distinctObj([{ a: 1 },{a: 3}, { a: 2 }, { a: 3 }, { a: 1 }], 'a'))

let arrObj = [{
  "name": "ZYTX",
  "age": 3,
  "gender": "AAAAAA.doc"
}, {
  "name": "ZYTA",
  "age": 2,
  "gender": "BBBBBB.doc"
}, {
  "name": "ZDTX",
  "age": 3,
  "gender": "CCCCCC.doc"
}, {
  "name": "ZYTX",
  "age": 2,
  "gender": "AAAAAA.doc"
}];

// function distinctObj (arrObj, keyName){
//   let hashObj = {};
//   return arrObj.reduce(function (item, next) {
//     if(!hashObj[next[keyName]]){
//       hashObj[next[keyName]] = true && item.push(next);
//     }
//     // hashObj[next[keyName]] ? '' : hashObj[next[keyName]] = true && item.push(next);
//     return item;
//   }, [])
// }

console.log(distinctObj(arrObj, 'name'));
console.log(distinctObj([{ "name": 1, 'b':2 }, { "name": 3, "c":2 }, { "name": 2 }, { "name": 3 }, { "name": 1 }], 'name'));

