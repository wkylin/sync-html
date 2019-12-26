
// 组件设计原则:
// 单一功能：不要让你的组件做太多事
// 扁平化的数据结构：Array+Object不要嵌套太深
// 更加纯粹的 State 变化：State变化应该符合逻辑
// 低耦合：组件应该独立自主，不应该太'亲密'，互相依赖不好
// 集中/统一的状态管理：不要把数据零散地存取在多处

// 并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明。
// setTimeout在若干毫秒后执行一个函数，并且是在for循环结束后。
// 在一个嵌套作用域里引入一个新名字的行为称做屏蔽。
// 当let声明出现在循环体里时拥有完全不同的行为。 不仅是在循环里引入了一个新的变量环境，而是针对 每次迭代都会创建这样一个新作用域。
// 默认值可以让你在属性为 undefined 时使用缺省值：
//  这就意味着出现在展开对象后面的属性会覆盖前面的属性。
// 其次，TypeScript编译器不允许展开泛型函数上的类型参数。


class foosss {
  bar = 'hello';
  baz = 'world';
  
  constructor() {
    // ...
  }
  
  getBar() {
    console.log(this.bar);
  }
}

const fo= new foosss();
console.log(fo.getBar());



const aArray=['1', '2'];
// console.log(typeof(aArray));

class Fooo {
  constructor(...args) {
    // console.log('args', args);
    // console.log(typeof(args));
    this.args = args;
  }
  * [Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg;
    }
  }
}

for (let x of new Fooo('hello', 'world')) {
  // console.log(x);
}



class PointCl {
  constructor(x, y) {
    // ...
  }
  
  toString() {
    // ...
  }
}

// console.log(Object.keys(PointCl.prototype));
// console.log(Object.getOwnPropertyNames(PointCl.prototype));


class Animal {
  move(distanceInMeters = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dogs extends Animal {
  // constructor() {
  //   super();
  //   // this.name = name;
  // }
  bark() {
    // console.log('Woof! Woof!');
    // console.log(this.name);
  }
}

const dogs = new Dogs();
// dogs.bark();
// dogs.move(10);
// dogs.bark();


// constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
// 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
// 与 ES5 一样，类的所有实例共享一个原型对象。
// 类不存在变量提升（hoist），这一点与 ES5 完全不同。
// 而let命令是不提升的
// 对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。

const objAa={
  name:'wkylin',
  age: 23,
  getName: function (){
    return (() => console.log(this.name))();
    // console.log(this.name);
  }
};

objAa.getAge = function(){
  console.log(this.age);
};
// console.log(objAa);
// objAa.getName();
const objAb = {...objAa};
// console.log(objAb);
// objAb.getName();

class classA {
  constructor(name) {
    this.name = name;
  }
  
  getName() {
    console.log(this.name);
  }

}

let ca = new classA('wkylin');
let caClone = {...ca};
// console.log(ca.getName());
// console.log(caClone.getName());


function fak() {
  var a = 1;
  
  a = 2;
  var b = g();
  a = 3;
  
  return b;
  
  function g() {
    return a;
  }
}

// console.log(fak()); // returns 2



function fff() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  }
}

var g = fff();
// console.log(g()); // returns 11;
// console.log(a);

let strss = "The rain in SPAIN stays mainly in the plain";
// let res = strss.match(/ain/gi);
// let res = strss.search(/ain/gi);

let str1 = "ab";
let str2 = "ab";
let obj3 = {name:'wkylin', age: 23};
let n = str1.localeCompare(str2);
// console.log(n);
// console.log(obj3.valueOf());


// console.log(res);

// 注：在 constructor 中必须调用 super 方法，因为子类没有自己的 this 对象，而是继承父类的 this 对象，然后对其进行加工,而 super 就代表了父类的构造函数。super 虽然代表了父类 A 的构造函数，但是返回的是子类 B 的实例，即 super 内部的 this 指的是 B，因此 super() 在这里相当于 ```A.prototype.constructor.call(this, props)``。


let line1 = ['ab', 'cd'];
// console.log(typeof(line1));
// console.log(...line1);


const newMap = new Map();
// newMap.set('jelly', 23);
// newMap.set({name: 'wk'}, 23);

// console.log(newMap);

let jelly = {name:'jelly', age: 20};
let mary = {name:'mary', age: 25};

const people = new WeakSet([jelly, mary]);

// console.log(people);
// 对象 不能for of 无clear 自动清理

// const arrayPeople = [jelly, mary];

mary = null;

// console.log(mary);
// console.log(arrayPeople);
// console.log(people);


const newSet = new Set();
newSet.add(1);
newSet.add(2);
newSet.add(3);
newSet.add(4);

// console.log(newSet);

const phoneHandler = {
  set(target, key, value){
    target[key] = value.match(/[0-9]/g).join('');
  },
  get(target, key){
    return target[key].replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
  }
};

const phoneNumber = new Proxy({}, phoneHandler);

phoneNumber.home='139 1553 1553';

// console.log(phoneNumber);
// console.log(phoneNumber.home);


// let print = console.log.bind(console, '>')


// subl sub
// /* globals Vue*/

// /* eslint-disable -- */
// /* eslint-enable -- */
// CommonJS的特点
//
// 所有代码都运行在模块作用域，不会污染全局作用域；
// 模块是同步加载的，即只有加载完成，才能执行后面的操作；
// 模块在首次执行后就会缓存，再次加载只返回缓存结果，如果想要再次执行，可清除缓存
// require返回的值是被输出的值的拷贝，模块内部的变化也不会影响这个值。

// ES6 Module的特点(对比CommonJS)
//
// CommonJS模块是运行时加载，ES6 Module是编译时输出接口；
// CommonJS加载的是整个模块，将所有的接口全部加载进来，ES6 Module可以单独加载其中的某个接口；
// CommonJS输出是值的拷贝，ES6 Module输出的是值的引用，被输出模块的内部的改变会影响引用的改变；
// CommonJS this指向当前模块，ES6 Module this指向undefined;


const classRoom = {
  [Symbol('lily')]:{ grade:60, gender:'female'},
  [Symbol('nina')]:{ grade:30, gender:'male'},
  [Symbol('nina')]:{ grade:90, gender:'female'},
};

for(let key in classRoom){
  console.log(key);
}

const syms = Object.getOwnPropertySymbols(classRoom).map((room) => classRoom[room]);

// console.log(syms); 不能遍历，可以内部使用



const fruitss =['apple', 'banana', 'pear'];
const newFruits = ['orange', 'mongo'];

// fruitss.push.apply(fruitss, newFruits);
// fruitss.push(...newFruits);
// console.log(fruitss);

const iKeys=['name', 'age', 'birthday'];
const iValues=['wkylin', 2, '2015-09-03'];
const wObj = {
  [iKeys.shift()]: iValues.shift(),
  [iKeys.shift()]: iValues.shift(),
  [iKeys.shift()]: iValues.shift(),
};
// console.log(wObj);




// 可迭代对象 接口/ [Symbol.iterator]

function sums() {
  let total = 0;
  console.log(arguments);
  for(let num of arguments){
    total = total + num;
  }
  
  console.log(total);
  return total;
}

// sums(1, 2, 3);
// for of 不支持对象/ 支持string nodeList

const objb = {
  a:1,
  b:2
};
// for(let value of objb){
//   // console.log(value);
// }



// Array.prototype.myPro = 'my prototype'
const fruits = ['apple', 'Banana','Orange', 'Mango']
fruits.myFruits = ' my fruits';

for(let [index, fruit] of fruits.entries()){
  // console.log(`${index} is ${fruit}`);
}

for(let i=0; i<fruits.length; i++){
  // console.log(fruits[i]);
}

fruits.forEach((fruit) => {
  
  // if(fruit == 'apple'){
  //   break;
  // }
  // console.log(fruit);
  
});

for (let fruit in fruits){
  // console.log(fruit);
  // console.log(fruits[fruit]);
}

for(let fruit of fruits){
  // console.log(fruit);
}



const obja = {
  // sister:0,
  // sister:null,
  sister:undefined,
  father: 'wkylin'
};

const {sister='aa', father} = obja;

// console.log(sister);
// console.log(father);

const sum = function() {
  return Array.from(arguments)
    .reduce((prevSum, value) => {
      return prevSum + value;
  }, 0)
};

// const sum = (...args) => {
//   return args.reduce((prevSum, value) => {
//       return prevSum + value;
//   }, 0)
// };
// console.log(sum(1,2,3));
// sum(1,2,3);

function multiply(a = 3,b =5){
  return a * b;
}

// console.log(multiply(1, 2));
// console.log(multiply(undefined, 2));
// console.log(multiply(null, 2));



function highlight(strings, ...values){
  // console.log('strings', strings);
  // console.log('values', values);
}

const users = 'Mary';
const topic = 'Learn to uses markdown';
const sentence = highlight`Jhone ${users} has commmened on your topic ${topic} aa`;

// console.log(sentence);

// let name = 'wkylin';
// console.log(window.name);

(function() {
  let a = 'aaa';
  // console.log(a);
})();

// console.log(a);


// SVG 是一个基于文本的开放 Web 标准。可缩放矢量图形（Scalable Vector Graphics，SVG），是一种用于描述基于二维的矢量图形的，基于 XML 的标记语言。本质上，SVG 相对于图像，就好比 HTML 相对于文本。
// https://webglreport.com/
// WebGL（全写Web Graphics Library）是一种3D绘图协议，
// WebGL可以为HTML5 Canvas提供硬件3D加速渲染，这样Web开发人员就可以借助系统显卡来在浏览器里更流畅地展示3D场景和模型了，还能创建复杂的导航和数据视觉化。
// 简单说来，WebGL绘制过程包括以下三步：
// 1、获取顶点坐标
// 2、图元装配（即画出一个个三角形）
// 3、光栅化（生成片元，即一个个像素点）

async function ffa() {
  // await Promise.reject('出错了');
}

ffa().then(v => console.log(v)).catch(e => console.log(e));

function fetchWithTimeout(fetch_promise, timeout) {
  let abortFn = null;
  
  //这是一个可以被reject的promise
  let abortPromise = new Promise(function(resolve, reject) {
    abortFn = function() {
      reject('abort promise');
    };
  });
  
  //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
  let aborTablePromise = Promise.race([
    fetch_promise,
    abortPromise
  ]);
  
  setTimeout(function() {
    abortFn();
  }, timeout);
  
  return aborTablePromise;
}


function fetchWithTimeout () {
  const FETCH_TIMEOUT = 5000;
  let didTimeOut = false;
  
  new Promise(function(resolve, reject) {
    const timeout = setTimeout(function() {
      didTimeOut = true;
      reject(new Error('Request timed out'));
    }, FETCH_TIMEOUT);
    
    fetch('https://davidwalsh.name/?xx1')
      .then(function(response) {
        // Clear the timeout as cleanup
        clearTimeout(timeout);
        if(!didTimeOut) {
          console.log('fetch good! ', response);
          resolve(response);
        }
      })
      .catch(function(err) {
        console.log('fetch failed! ', err);
        
        // Rejection already happened with setTimeout
        if(didTimeOut) return;
        // Reject with error
        reject(err);
      });
  })
    .then(function() {
      // Request success and no timeout
      console.log('good promise, no timeout! ');
    })
    .catch(function(err) {
      // Error: response error, request timeout or runtime error
      console.log('promise error! ', err);
    });
}


// console.log('1');

setTimeout(function () {
  // console.log('2');
}, 100);

// console.log('3');

async function test() {
  console.log('4');
  await Promise.resolve();
  console.log('5');
}
// test();

let abcc = new Promise(function (resolve) {
  setTimeout(() => {
    resolve();
    // console.log('6');
  });
});

// console.log('7');

abcc.then(function () {
  // console.log('8');
});

// 13475862






let isValid = function(s) {
  let stack = [];
  let map = {
    '(' : ')',
    '[': ']',
    '{': '}'
  };
  
  for (let char of s) {
    if(char in map) {
      stack.push(char)
    } else {
      if( !stack.length || char != map[stack.pop()]) {
        return false
      }
    }
  }
  
  // 如果最后stack 里没有元素了， 就一定是匹配的
  return !stack.length
};

// console.log(isValid('{(){}[]}'));

function getSum(arr,sum) {
  if (arr == '' || arr.length == 0) {
    return false;
  }
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        // console.log(arr[i] + " + " + arr[j] + " = " + sum);
      }
    }
  }
}

// getSum([1,3,7,9, 10, 0], 10);


// redux-saga是个非常强大处理副作用的工具。它提供了对异步流程更细粒度的控制，对每个异步流程他可以实现暂停、停止、启动三种状态。此外redux-saga利用了generator，对每个saga，其测试方式可以非常简单。
// 更重要的是其异步处理逻辑放在了saga中，我们可以监听action触发，然后产生副作用。
// action依然是普通的redux action，不破坏redux对action的定义。


let longestPalindrome = function(s) {
  let len = s.length;
  let result;
  let i,j,L;
  let dp=Array(len).fill(0).map(x=>Array(len).fill(0));
  //console.log(dp);
  if(len<=1){
    return s
  }
  // 只有一个字符的情况是回文
  for(i = 0;i<len;i++){
    dp[i][i] = 1;
    result = s[i]
  }
  
  // L是i和j之间的间隔数（因为间隔数从小到大渐增，所以大的间隔数总能包含小的间隔数）
  // i     j
  // abcdcba.length = L   所以 L = j-i+1; => j = i+L-1;
  for ( L = 2; L <= len; L++) {
    // 从0开始
    for ( i = 0; i <= len - L; i++) {
      j = i + L - 1;
      if(L == 2 && s[i] == s[j]) {
        dp[i][j] = 1;
        result = s.slice(i, i + L);
      }else if(s[i] == s[j] && dp[i + 1][j - 1] == 1) {
        dp[i][j] = 1
        result = s.slice(i, i + L);
      }
      
    }
  }
  //console.log(result);
  return result;
};

// let longestPalindrome = function(s) {
//   let n = s.length;
//   let result = '';
//   for(let i = 0;i<n;i++){
//     for(let j=i+1;j<=n;j++){
//       let str = s.slice(i,j);
//       let f = str.split('').reverse().join('');
//
//       if(str == f){
//         result = str.length > result.length ? str : result;
//       }
//     }
//   }
//   console.log(result);
//
//   return result;
// };


// console.log(longestPalindrome('abcbamoneaaenom'));


function isCardNo(number) {
  let regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return regx.test(number);
}

let strNumber = "abcabcabcbbccccc";
let num = 0;
let char = '';

// 使其按照一定的次序排列
strNumber = strNumber.split('').sort().join('');
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g;
strNumber.replace(re,($0,$1) => {
  if(num < $0.length){
    num = $0.length;
    char = $1;
  }
});
// console.log(`字符最多的是${char}，出现了${num}次`);

function parseToMoney(num) {
  num = parseFloat(num.toFixed(3));
  let [integer, decimal] = String.prototype.split.call(num, '.');
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
  return integer + '.' + (decimal ? decimal : '');
}




let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
// console.log(parseParam(url));

function parseParam(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
  let paramsObj = {};
  // 将 params 存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理有 value 的参数
      let [key, val] = param.split('='); // 分割 key 和 value
      val = decodeURIComponent(val); // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
      
      if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else { // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val;
      }
    } else { // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  });
  
  return paramsObj;
}


let s1 = "get-element-by-id";
let ff = function (s) {
  return s.replace(/-\w/g, function (x) {
    return x.slice(1).toUpperCase();
  });
};
// console.log(ff(s1));


// Vue自身实现一个Watcher，作为连接Observer和Compile的桥梁。
// 闭包是有权限访问其他函数作用域内的变量的一个函数。
// 在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
// all会立即决议，决议结果是fullfilled，值是undefined
// race会永远都不决议，程序卡住……
// 传统的try/catch捕获异常方式是无法捕获异步的异常的。
// 进行数字类型转换时，null返回0，undefined返回NaN
// 对象转成原始数据类型时，先调用对象的valueOf方法，如果返回结果不是原始数据类型的值，再调用toString方法。
// vue实现响应式并不是数据发生变化后dom立即变化，而是按照一定的策略来进行dom更新。
// $nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM
// ref 被用来给元素或子组件注册引用信息。
// Vue.set( target, key, value )
// mounted 不会承诺所有的子组件也都一起被挂载。
// 每个实例可以维护一份被返回对象的独立的拷贝
// 计算属性是基于它们的依赖进行缓存的
// 每当触发重新渲染时，调用方法(methods)将总会再次执行函数。
//  nextTick: Vue 中数据的变化到 DOM 的更新渲染是一个异步过程。
// 此方法便用于在 DOM 更新循环结束之后执行延迟回调
// cb 函数经处理压入 callbacks 数组，执行 timerFunc 函数，延迟调用 flushCallbacks 函数，遍历执行 callbacks 数组中的所有函数。
// 延迟调用优先级如下：
// Promise > MutationObserver > setImmediate > setTimeout

// 1.commonjs输出的，是一个值的拷贝，而es6输出的是值的引用；
// 2.commonjs是运行时加载，es6是编译时输出接口；

// console.log((0.1*10 + 0.2*10)/10 == 0.3); //true

let arrSet = [1, '1', 2, '2', 1, 2, 'x', 'y', 'f', 'x', 'y', 'f'];

function unique1(arrSet) {
  let result = [arrSet[0]];
  for (let i = 1; i < arrSet.length; i++) {
    let item = arrSet[i];
    if (result.indexOf(item) == -1) {
      result.push(item);
    }
  }
  return result;
}

// console.log(unique1(arrSet));

// console.log([...new Set(arrSet)]);


// const a = {counter: 1},
//   b = {counter: 2},
//   c = { counter: 3};
// const d = Object.assign({}, a, b, c);
// console.log(d); // {counter: 3}

let s = new Set(['foo', window]);
Array.from(s);
let m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

// function f() {
//   return Array.from(arguments);
// }
// f(1, 2, 3);
// [1, 2, 3]

Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]
Array.from({ length: 5 }, (v, i) => i);

// [0, 1, 2, 3, 4]

function Archiver() {
  let temperature = null;
  let archive = [];
  
  Object.defineProperty(this, 'temperature', {
    get: function () {
      // console.log('get!');
      return temperature;
    },
    set: function (value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });
  this.getArchive = function () {
    return archive;
  };
}

let arc = new Archiver();
arc.temperature;
arc.temperature = 11;
arc.temperature = 13;
arc.temperature = 14;
// console.log(arc.getArchive());

// let a=[1,2,3,4];
// let b=[1,2,3,4];
// delete a[1];
// console.log(a); // empty 长度不变

let objs = {
  name: 'wkylin',
  age: 22
};
delete objs.age;
// console.log(objs);


// 箭头函数内部的this总是指向定义时所在的对象。上面代码中，箭头函数位于构造函数内部，它的定义生效的时候，是在构造函数执行的时候。
// 这时，箭头函数所在的运行环境，肯定是实例对象，所以this会总是指向实例对象。
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，
// 而是直接通过类来调用，这就称为“静态方法”。
// 父类的静态方法，可以被子类继承。
// 注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。


class A {
  print() {
    console.log('print a');
  }
}

class C extends A {
  print() {
    super.print();
    console.log('print c');
  }
}

const c = new C();

// c.print();


class B {
  print = () => {
    console.log('print b');
  };
}

class D extends B {
  print() {
    super.print();
    console.log('print d');
  }
}

const d = new D();

// d.print();

class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }
  
  printName(name = 'there') {
    console.log('this>>', this);
    this.print(`Hello ${name}`);
  }
  
  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
// console.log(printName());
// console.log(logger.printName());


class Fooss {
  constructor(...args) {
    console.log(typeof (args));
    this.args = args;
    console.log(this.args);
  }
  
  // * [Symbol.iterator]() {
  //   for (let arg of this.args) {
  //     yield arg;
  //   }
  // }
}

// for (let x of new Fooss('hello', 'world')) {
//   console.log(x);
// }


// 类不存在变量提升（hoist），这一点与 ES5 完全不同。
// new Foo(); // ReferenceError
// class Foo {}
const MyClass = class Me {
  // constructor(name) {
  //   this.name = name;
  // }
  
  getClassName() {
    return Me.name;
  }
};
// const MyClass = class Me{
//   getClassName() {
//     return Me.name;
//   }
// };

let inst = new MyClass('name');
// console.log(MyClass.name);
// console.log(inst.getClassName()); // Me
// console.log(Me.name);
// console.log(Me.getClassName());


class PointClass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  toString() {
    return `${this.x}, ${this.y}`;
  }
}

let pointClass = new PointClass(2, 3);
// console.log(pointClass.toString());

// console.log(pointClass.hasOwnProperty('x'));
// console.log(pointClass.hasOwnProperty('y'));
// console.log(pointClass.hasOwnProperty('toString'));
// console.log(pointClass.__proto__.hasOwnProperty('toString'));


class Foo {
  constructor() {
    // return Object.create(null);
  }
}

// console.log(new Foo() instanceof Foo);


class Points {
  constructor(x, y) {
    // ...
  }
  
  toString() {
    // ...
  }
}

// console.log(Points.prototype);
// console.log(Object.keys(Points.prototype));
// []
// console.log(Object.getOwnPropertyNames(Points.prototype));
// ["constructor","toString"]


class Bar {
  doStuff() {
    console.log('stuff');
  }
}

let b = new Bar();

// console.log(b.doStuff()); // "stuff"


class Point {
  // ...
}

// console.log(typeof Point); // "function"
// console.log(Point === Point.prototype.constructor );// true


// ES6 明确规定， Class 内部只有静态方法， 没有静态属性。
// 我们定义实例属性， 只能写在类的constructor方法里面。
// ES7 有一个静态属性的提案， 目前 Babel 转码器支持。

// //  老写法
// class Foo {}
// Foo.prop = 1;
// //  新写法
// class Foo {
//   static prop = 1;
// }


// Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。
// 首先需要明白的是React组件状态必须是一个原生JavaScript对象，而不能是一个Immutable对象，因为React的setState方法期望接受一个对象然后使用Object.assign方法将其与之前的状态对象合并。
// Redux中讲状态（state）主要是指应用状态，而不是组件状态。

// let str = "get-element-by-id";
//
// function stringToCamel(str) {
//   let temp = str.split("-");
//   for (let i = 1; i < temp.length; i++) {
//     temp[i] = temp[i][0].toUpperCase() + temp[i].slice(1);
//   }
//   return temp.join("");
// }

// new ClassA
// 第一步： obj = {}
// 第二步： 设置新对象的constructor属性为构造函数， 设置对象的__proto__属性指向构造函数的prototype
// obj.__proto__ = ClassA.prototype;
// 第三步：新对象调用函数，this 指向新实例对象
// ClassA.call(obj)
// 第四步： 返回新对象
// 注意： 构造函数中返回this或者是基本类型的值，则返回新实例对象;
// 若返回值是引用类型的值，则实际返回值为这个引用类型

function objectFactory() {
  let obj = new Object(),
    Constructor = [].shift().call(arguments);
  
  obj.__proto__ = Constructor.prototype;
  let ret = Constructor.apply(obj, arguments);
  
  return typeof ret === 'object' ? ret : obj;
}


function f2() {
  this.name = 'name';
  return {};
}

function f1() {
  this.name = 'name';
}

// console.log('new f1().name:', new f1().name);
// console.log('f1.name:', f1.name);
//
// console.log('new f2().name:', new f2().name);
// console.log('f2.name:', f2.name);

// function f2(){
//   this.age='name';
//   return {}
// }
//
// function f1() {
//   this.age = 'name';
// }
//
// console.log('new f1().age:', new f1().age);
// console.log('f1.age:', f1.age);
//
// console.log('new f2().age:', new f2().age);
// console.log('f2.age:', f2.age);


let a = 10;
(function () {
    // console.log(a);
    let a = b = 1000;
    // console.log(a);
  }
)();

// console.log(a + b);


let fName = 'fName';
let john = {
  fName: 'John',
  lName: 'Doe',
  driverCar() {
    let self = this;
    let ads = () => {
      console.log(this);
    };
    // function ads(){
    //   console.log(self);
    //   console.log(self.fName);
    //   return `${self.fName}`;
    // }
    ads();
    // console.log(`fName: ${this.fName}`);
  }
};
// console.log(john.driverCar());


const target = {};
const handlerAab = {
  get() {
    return Reflect.get(target, key);
  }
};
const { proxyAb, revoke } = Proxy.revocable(target, handlerAab);

// console.log(Proxy.revocable(target, handlerAab));

// proxyAb.isUsable = true;

// console.log(proxyAb);
// revoke();

// console.log(proxyAb);


const per = {};
const handler = {
  get(target, key) {
    console.log(`Get on property "${key}"`);
    if (!key.startsWith('_')) {
      throw new Error(`Property ${key} is inaccessible`);
    }
    return Reflect.get(target, key);
  }
};
const proxy = new Proxy(per, handler);

proxy.number = [1, 2, 3, 4];
proxy._glo = { a: 'b' };

// console.log(proxy._glo);


function mul(mul) {
  return function (x) {
    return x * mul;
  };
}

let du = mul(2);
let dx = mul(3);
// console.log(du(2));
// console.log(dx(3));


let myWords = ['red', 'orange', 'yellow'];

// console.log(myWords.splice(0, 1, 'blue'));
// console.log(myWords);

// console.log(myWords.splice(0,2));

// 服务器回应的 HTTP 头的Content-Type属性要设为application/json
// 客户端请求时，也要明确告诉服务器，可以接受 JSON 格式，即请求的 HTTP 头的ACCEPT属性也要设成application/json。


const weakSets = new WeakSet();
// weakSets.add(1);
weakSets.add({});
weakSets.add(() => {
});
weakSets.add([1]);
// console.log([...weakSets]);d

const wSets = new Set([{}, () => {
}, new Date()]);
// console.log(wSets.entries);
// console.log([...wSets]);

// const regNull = Object.create(null);
const regNull = Object.create({ name: 'Dim' });

regNull[Symbol.iterator] = () => {
  const keys = Object.keys(regNull);
  
  return {
    next() {
      const done = keys.length === 0;
      const key = keys.shift();
      const value = [key, regNull[key]];
      return {
        done, value
      };
    }
  };
};
// regNull.age =2;
// console.log([...regNull]);
// regNull.age =2;
// console.log(regNull.name);
// console.log(regNull.age);
// console.log(regNull.hasOwnProperty('name'));
// console.log(regNull.hasOwnProperty('age'));
// console.log(regNull.__proto__);

const objEmpty = {};
// console.log(objEmpty);
const listMap = function () {
  // return Object.keys(objEmpty).map((item) => [item, regNull[key]])
  return Object.keys(regNull).map((item) => [item, regNull[key]]);
};
// console.log(listMap());


// insertAdjacentHTML()
// insertAdjacentText()


//dataset
// className
// classList


function $(selector, el) {
  if (!el) {
    el = document;
  }
  return el.querySelector(selector);
}

function $$(selector, el) {
  if (!el) {
    el = document;
  }
  return el.querySelectorAll(selector);
}

// console.log('123456'.split(''));


let strReg = 'Welcome to daily tuition';
let reg = /daily/;

// console.log(strReg.search(reg));
// console.log([1, 2, 3].join(''));


// console.log([...new Set([1, 2, 2, 3,4])]);
let aSet = new Set();
let weakSet = new WeakSet();
// weakSet.add('2');
// weakSet.add([1, 2]);
let objSet = { a: '22' };
let objSet2 = { b: '33' };
weakSet.add(objSet);
weakSet.add(objSet2);
aSet.add(objSet);
aSet.add('2');
// console.log(weakSet);
// console.log(aSet);
// for(let value of weakSet){
//   console.log(value);
// }

// for(let value of aSet){
//   console.log(value);
// }


let user = {
  name: 'Daily'
};
// console.log(user.name);
user = null;
// console.log(user.name);

let weakMap = new WeakMap();
let obj = {};

weakMap.set(obj, 'Private');
// console.log(weakMap.get(obj));

// for(let [key, value] of weakMap){
// console.log(key);
// console.log(value);
// }


const myMaps = new Map();
let keyString = 'KeyString',
  keyObj = {},
  keyFun = function () {
  };
myMaps.set(keyString, 'KeyString');
myMaps.set(keyObj, 'KeyObj');
myMaps.set(keyFun, "keyFun");
// console.log(myMaps);
// console.log(myMaps.get(keyObj));

myMaps.set(NaN, 'Not a Number');

for (let [key, value] of myMaps) {
  // console.log(`Map Keys：${key}, value: ${value}`);
}


class Em {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  getEm() {
    console.log(`Em name: ${this.name}`);
  }
}

class Me extends Em {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  
  // getEm(){
  //   console.log(`Me name: ${this.name}, salary: ${this.salary}`);
  // }
}

// const mes = new Me('w', 23, 2300);
// console.log(mes.getEm());


let car = {
  wheel: 'four',
  model: 'tesla',
  show() {
    console.log(`Car model ${this.model}`);
  }
};

let bike = {
  cc: 250,
  __proto__: car
};

let bicycle = {
  gear: 5,
  __proto__: bike
};

// console.log(bicycle.model);

// let bike = {
//   cc: 250
// };
// bike.__proto__ = car;
// console.log(bike);
// console.log(bike.cc);
// console.log(bike.wheel);
// console.log(bike.model);
// console.log(bike.show());


class Parent {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}

class child extends Parent {
  constructor(age) {
    super('Harry', 'Dim');
    this.age = age;
  }
  
  showUp() {
    console.log(this.fname);
    console.log(`Your age is ${this.age}`);
  }
}

const children = new child(23);
// console.log(children.showUp());
// console.log(children.fname);
// console.log(children.lname);


class oClass {
  
  constructor() {
    // console.log(oClass.onCall());
    // console.log(this.constructor.onCall());
  }
  
  static onCall() {
    return 'this is a static Method';
  }
  
  static onCall2() {
    return `${this.onCall()} called using another static method`;
  }
}

const st = new oClass();
// st.onCall();
// console.log(oClass.onCall());
// console.log(oClass.onCall2());


let f = function () {
  this.a = 1;
  this.b = 2;
};

let o = new f();
o.d = 5;

f.prototype.b = 3;
f.prototype.c = 4;

for (let key in o) {
  // console.log(o[key]);
}
// console.log(o.a);
// console.log(o.b);
// console.log(o.c);
// console.log(o.d);
// console.log(o);
// console.log(f);
// console.log(f.prototype);


class Model {
  constructor(Mno, Mname) {
    this.Mno = Mno;
    this.Mname = Mname;
  }
  
  show() {
    console.log('Model Number', this.Mno);
  }
}

const obj1 = new Model(550, 'BMW');
const obj2 = new Model(660, 'Fort');

// console.log(obj1 instanceof Model);
// console.log(obj2.show());

// Object = Properties + Methods


const objA = {
  f1: 'a',
  f2: 'b',
  f3: 'c'
};

for (let k in objA) {
  // console.log(objA[k]);
}
// for(let k of objA){
//   // console.log(k); // not iterable
// }


const aa = [1, 2, 3, 4, 5];
// console.log(aa.copyWithin(1, 2, 4));
// console.log(aa);

// console.log(aa.slice(-2));
// console.log(aa.slice(2));
//
// console.log(aa.splice(1, 0, 6,7));
// console.log(aa);


// 持续集成指的是，频繁地（一天多次）将代码集成到主干。
// 持续集成的目的，就是让产品可以快速迭代，同时还能保持高质量。它的核心措施是，代码集成到主干之前，必须通过自动化测试。只要有一个测试用例失败，就不能集成。
// 持续交付（Continuous delivery）指的是，频繁地将软件的新版本，交付给质量团队或者用户，以供评审。
// 持续部署（continuous deployment）是持续交付的下一步，指的是代码通过评审以后，自动部署到生产环境。
// 持续集成强调开发人员提交了新代码之后，立刻进行构建、（单元）测试。根据测试结果，我们可以确定新代码和原有代码能否正确地集成在一起。
// 持续交付在持续集成的基础上，将集成后的代码部署到更贴近真实运行环境的「类生产环境」（production-like environments）中。比如，我们完成单元测试后，可以把代码部署到连接数据库的 Staging 环境中更多的测试。如果代码没有问题，可以继续手动部署到生产环境中。
// 持续部署则是在持续交付的基础上，把部署到生产环境的过程自动化。


for (let i = 1; i < 5; i++) {
  // if(i==3) break;
  if (i == 3) continue;
  // console.log(i);
}


function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('arguments must be an array'));
    }
    let resolvedCounter = 0;
    let promiseNum = promises.length;
    let resolvedValues = new Array(promiseNum);
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(function (value) {
        resolvedCounter++;
        resolvedValues[i] = value;
        if (resolvedCounter === promiseNum) {
          return resolve(resolvedValues);
        }
      }, function (reason) {
        return reject(reason);
      });
    }
  });
}


function wait(delay) {
  return new Promise(resolve => setTimeout(() => resolve(), delay));
}

// console.log(wait(1000).then(()=> console.log('wait')));


// let age = '6';
// console.log(window.age);


const pistol = {
  caliber: 50,
  trigger() {
    let self = this;
    setTimeout(function () {
      console.log(`${self.caliber} pistol`);
    }, 1000);
  }
  // trigger() {
  //   setTimeout(() => console.log(`${this.caliber} pistol`), 1000)
  // }
};

// pistol.trigger();


// for in 可枚举的属性
// for of 可迭代对象的生成器的值
let arrs = [1, 2, 3, 4];
let strs = 'wkylin';
for (let value of arrs) {
  // console.log(value);
}

for (let value of strs) {
  // console.log(value);
}


function getNumberParts(number) {
  const regNumber = /(\d+)\.(\d+)/;
  const matches = number.toString().match(regNumber);
  if (matches === null) {
    return null;
  }
  const [, integer, fractional] = matches;
  return {
    integer,
    fractional
  };
}

// console.log(getNumberParts(1234.56));


let str = 'aabb bb';
let strCopy = str.split();
str = 'aaa ccc';
// console.log(str);
// console.log(strCopy);


// let age = prompt('What is your age');

// console.log(age);

for (let i = 0; i < 5; i++) {
  // console.log(i);
  // setTimeout(()=> console.log(i), 1000);
}
// console.log('iii', i);

const firstCharUpper = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// console.log(firstCharUpper('wkylin'));


function myLocalScope() {
  let mylet = 5;
  console.log(mylet);
}

// myLocalScope();
// console.log(mylet);


let myGlobal = 10;

function fun1() {
  // oopsGlobal = 5;
  let oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != 'undefined') {
    output += 'myGlobal: ' + myGlobal;
  }
  if (typeof oopsGlobal != 'undefined') {
    output += 'oopsGlobal: ' + oopsGlobal;
  }
  console.log(typeof oopsGlobal);
  console.log(output);
}

// fun1();
// fun2();

function get_object_first_attribute(data) {
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
// for (let i= 0; i<5; i++){
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

