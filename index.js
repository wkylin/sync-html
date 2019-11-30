// let age = '6';
// console.log(window.age);




var str='aabb bb';
var strCopy = str.split();
str = 'aaa ccc';
// console.log(str);
// console.log(strCopy);



// var age = prompt('What is your age');

// console.log(age);

for(var i = 0; i<5; i++){
  // console.log(i);
  // setTimeout(()=> console.log(i), 1000);
}
// console.log('iii', i);

const firstCharUpper = (str) =>{
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// console.log(firstCharUpper('wkylin'));



function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
// myLocalScope();
// console.log(myVar);


var myGlobal= 10;
function fun1() {
  // oopsGlobal = 5;
  var oopsGlobal = 5;
}

function fun2(){
  var output = "";
  if(typeof myGlobal != 'undefined'){
    output += 'myGlobal: ' + myGlobal;
  }
  if(typeof oopsGlobal != 'undefined'){
    output += 'oopsGlobal: ' + oopsGlobal;
  }
  console.log(typeof oopsGlobal);
  console.log(output);
}

// fun1();
// fun2();

function get_object_first_attribute(data){
  for (let key in data)
    return data[key];
}


function myFibonacci(n) {
  if (n < 0) {
    console.log('You Should input a Positive integer!');
    return;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n > 1) {
    return myFibonacci(n - 1) + myFibonacci(n - 2);
  }
}

// 浏览器模式决定：1）发送给服务端的UA；2）默认的文本模式；3）如何解析条件注释。它在请求发送前就已经确定，且不受服务端控制。
// 文本模式决定：1）排版引擎；2）JS引擎。它在浏览器得到响应后最终确定，服务端可通过doctype或X-UA-Compatible来控制。

// <meta http-equiv="X-UA-Compatible" content="IE=Edge">

// Window.getComputedStyle() Element.currentStyle

// virtual DOM不一样,vue会跟踪每一个组件的依赖关系, 不需要重新渲染整个组件树.​​
// 而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制。

// setState是一个异步的过程，它会集齐一批需要更新的组件然后一起更新。 isBatchingUpdates


// this.setState({
//     total: 0
// })
// this.setState((prevState, props) => ({
//     total: prevState.total + 1
//  }))

//setTimeout(this.showTotal, 0);
//
// showTotal(){
//     console.log(this.state.total) // 这里可以获取到更新值
// }




function createRandomNumber(num, maxNum) {
  if (!maxNum || !num) {
    alert("please input two Number");
    return false;
  }
  let flag = 0, arr = [];
  if (maxNum - num < 0) {
    flag = maxNum;
    maxNum = num;
    num = flag;
  }
  for (let i = 0; i < maxNum; i++) {
    arr[i] = i - 0 + 1;
  }
  
  arr.sort(function (p1, p2) {
    return 0.5 - Math.random();
  });
  arr.length = num;
  return arr;
}

// console.log(createRandomNumber(100, 100));

function randomHexColor() { //随机生成十六进制颜色
  let hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
  while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
    hex = '0' + hex;
  }
  return '#' + hex; //返回‘#’开头16进制颜色
}

function randomRgbColor() { //随机生成RGB颜色
  let r = Math.floor(Math.random() * 256); //随机生成256以内r值
  let g = Math.floor(Math.random() * 256); //随机生成256以内g值
  let b = Math.floor(Math.random() * 256); //随机生成256以内b值
  return `rgb(${r},${g},${b})`; //返回rgb(r,g,b)格式颜色
}

function randomRgbaColor() { //随机生成RGBA颜色
  let r = Math.floor(Math.random() * 256); //随机生成256以内r值
  let g = Math.floor(Math.random() * 256); //随机生成256以内g值
  let b = Math.floor(Math.random() * 256); //随机生成256以内b值
  let alpha = Math.random(); //随机生成1以内a值
  return `rgb(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式颜色
}


let series = ['a1', 'a3', 'a1', 'a5', 'a7', 'a1', 'a3', 'a4', 'a2', 'a1'];

let results = series.reduce(function (accumulator, current) {
  if (current in accumulator) {
    accumulator[current]++;
  } else {
    accumulator[current] = 1;
  }
  return accumulator;
}, {});

// console.log(JSON.stringify(results));


// for (let i= 0; i<5; i++){
//   setTimeout(function(){
//     console.log(i);
//   }, i*1000)
// }
// for (var i= 0; i<5; i++){
//   setTimeout(function(){
//     console.log(i);
//   }, i*1000)
// }


function gtn(listArr) {
  let getObjType = Object.prototype.toString;
  let res = {};
  listArr.forEach((item) => {
    let key = getObjType.call(item).split(' ')[1].slice(0, -1);
    res[key] = (res[key] || 0) + 1;
  });
  return res;
}

let ress = gtn(['1', 2, { a: 3 }, '22', 333, { b: 33 }, ['22', 22]]);
// console.log(ress);


// (function() {
//   console.log(1);
//   setTimeout(function(){ console.log(2);}, 0);
//   new Promise(function(resolve,reject){
//     console.log(3);
//     resolve(4);
//   }).then(function(val){
//     console.log(val);
//   });
//
//   console.log(5);
// })();

function abc(str) {
  return str.replace(/(.)\1+/g, '$1');
}

// console.log(abc('1223'));
// console.log(removeRepetition('ddccd'));
function removeRepetition(str) {
  let result = '';
  if (str != '') {
    result = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] != str[i - 1]) {
        result += str[i];
      }
    }
  }
  return result;
}

let timer1 = (cb, time) => {
  (function loop() {
    cb();
    setTimeout(loop, time);
  })();
};

let timer2 = (cb, time) => {
  cb();
  setInterval(cb, time);
};

// timer1(()=> console.log('aaa'), 1000);

// timer2(() => console.log('bbb'), 1000);


function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);

const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));


let personItem = { name: "Lydia" };
const members = [personItem];
personItem = null;
// console.log(members);

const studentItem = {
  name: 'Lydia',
  age: 21
};

for (const item in studentItem) {
  // console.log(item);
}

// console.log(3 + 4 + '5');

// const num = parseInt('7*6', 10);


const arrMap = [1, 2, 3].map((num) => {
  // if(typeof num === 'number') return;
  return num * 2;
});

// console.log(arrMap);

function getInfo(member, year) {
  member.name = "Lydia";
  year = '1998';
}

const dogName = { name: 'Sarah' };
const dogYear = '1997';
getInfo(dogName, dogYear);

// console.log(dogName, dogYear);

const nest = (items, id = null, link = 'parent_id') => {
  return items.filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));
};

const comments = [
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 },
  { id: 1, parent_id: null }
];
const nestedComments = nest(comments);

// console.log(nestedComments);


function parseQueryString(url) {
  let obj = {};
  let keyValue = [];
  let key = "",
    value = "";
  let paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
  for (let i in paraString) {
    keyValue = paraString[i].split("=");
    key = keyValue[0];
    value = keyValue[1];
    obj[key] = value;
  }
  return obj;
}

// console.log(parseQueryString('http://www.baidu.com?a=1&b=2'));


// console.log(typeof fn);
// function fn(){
//
// }
// let fn;

function query(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    
    if (!obj[str.charAt(i)]) {
      obj[str.charAt(i)] = 1;
    } else {
      obj[str.charAt(i)] = obj[str.charAt(i)]++;
    }
  }
  let max = 0;
  let maxStr = '';
  for (let item in obj) {
    if (obj[item] > max) {
      max = obj[item];
      maxStr = item;
    }
  }
  return {
    max,
    maxStr
  };
}

// const maxStrs = query('aabbccccccc');
// console.log('maxStrs',maxStrs);

// let a = new String('hello');
// a.pro = 'world';


// let a = new Number(10);
// a.pro = 10;

// console.log(a);
// console.log(a.pro);
// console.log(a.pro + a);


// console.log('a' in window);
// if('a' in window){
//   let a = 10;
// }
// console.log(a);

// let f = true;
// if(f=== true){
//   let a = 10;
// }
//
// function fn(){
//   let b = 20;
//   c = 30;
// }
//
// fn();

// console.log(a);
// console.log(b);
// console.log(c);

// function fn(a){
//   console.log(a);
//   let a = 2;
//   function a(){}
//   console.log(a);
// }

// fn(1);


let array = [
  { rand: 1, id: 2 },
  { rand: 1, id: 1 },
  { rand: 1, id: 3 },
  { rand: 1, id: 3 }
];

let aRaa = array.sort((a, b) => a.id - b.id > 0 ? 1 : -1);

// console.log('array', array);
// console.log('aRaa', aRaa);

// console.log(null + 1);
// console.log(undefined +1);


// boolean 转成number string 转成number

function outer() {
  let a = 1;
  
  function inner() {
    let b = 2;
    
    function innermost() {
      let c = 3;
      // console.log(a, b, c);
    }
    
    innermost();
    // console.log(a,b);
  }
  
  inner();
  // console.log(a)
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

function sayHi(name) {
  let message = `Hi, ${name}`;
  
  function greeting() {
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

function myScope() {
  let param = 2;
  console.log(param);
}

this.prop = 1;

function myContext() {
  
  this.prop = 2;
  // console.log(this);
  console.log(prop);
  
}

// let myInstance = new myContext();
// console.log('my:',myInstance);
// console.log('win', new myContext())
// myScope();

function Dinosaur(name) {
  this.name = name;
  let self = this;
  inner();
  
  function inner() {
    console.log(this);
    console.log(self);
  }
}

// let myDinosaur = new Dinosaur('Dino');
// console.log(myDinosaur)


function Bird() {
  this.wings = 2;
}

let fakeBird = Bird();
// console.log(fakeBird);

let realBird = new Bird();

// console.log(realBird);


function Dog(breed, name) {
  this.breed = breed;
  this.name = name;
}

Dog.prototype.describe = function () {
  console.log(`${this.name} is a ${this.breed}`);
};
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

function Car() {
}

Car.prototype.wheels = 4;
Car.prototype.airbags = 1;
let myCar = new Car();
myCar.color = 'black';
// console.log('airbags' in myCar);
// console.log(myCar.wheels);
// console.log(myCar.year);

// console.log(myCar.hasOwnProperty('airbags'));
// console.log(myCar.hasOwnProperty('color'));

let dog = { legs: 4 };
let myDog = Object.create(dog);
// console.log(myDog.hasOwnProperty('legs'));
// console.log(myDog.__proto__ === dog);
// console.log(Object.getPrototypeOf(myDog));
// console.log(Object.getOwnPropertyNames(myDog));
// console.log(Object.getOwnPropertySymbols(myDog));

let objProto = { text: 'original' };
let objAttToProto = Object.create(objProto);
// objProto.text = 'prototype changed';
// console.log(objAttToProto.text);
objProto = { text: 'replacing property' };
// console.log(objAttToProto.text);

const person = function (name) {
  const message = `Hello! My name is ${name}`;
  return {
    greeting: () => {
      console.log(this);
      console.log(message);
    },
    foo: function () {
      console.log(this);
      console.log(message);
    }
  };
};

const will = person('Will');
// will.greeting();
// will.foo();

// setTimeout方法传入的时间参数并不是函数延迟执行的时间，
// 而是事件管理器将函数移入调用栈的等待时间。

const isGreater = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a > b) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};
isGreater(1, 2)
  .then(result => {
    // console.log('greater')
  })
  .catch(result => {
    // console.log('smaller')
  });

function putDookieInAnyArray(arr) {
  return [...arr, 'dookie'];
}

const result = putDookieInAnyArray(['I', 'really', "don't", 'like']);
// console.log(result);
const persons = {
  name: 'Todd',
  age: 29
};

const copyOfTodd = { ...persons };

// console.log(copyOfTodd)

function Person(name) {
  this.name = name;
}

function Student(name, studentId) {
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

// console.log(add.call(null, ...[1, 2])); // 3
// console.log(add.apply(null, [1, 2])); // 3

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
// deepFreeze(person);
// wills.profession.name = "doctor"; // TypeError: Cannot assign to read only property 'name' of object

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

// console.log(distinctObj([{ a: 1 },{a: 3}, { a: 2 }, { a: 3 }, { a: 1 }], 'a'))

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

// console.log(distinctObj(arrObj, 'name'));
// console.log(distinctObj([{ "name": 1, 'b':2 }, { "name": 3, "c":2 }, { "name": 2 }, { "name": 3 }, { "name": 1 }], 'name'));

