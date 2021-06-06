
// const foo = ['foo', Symbol.for('bar'), 'baz'];
// const foobar = foo.reduce((a, b) => ({ ...a, [b]: undefined }), {});

// const foobaz = [...Object.keys(foobar)].join('');

// console.log('foobar', foobar);
// console.log('foobaz', foobaz);

// console.log('' + Symbol('id'))
//Cannot convert a Symbol value to a string

// '' + null
//'null'
// '' + undefined
//'undefined'

// null.toString()
//Cannot read property 'toString' of null
// undefined.toString()
//Cannot read property 'toString' of undefined

// Symbol('id').toString();
//'Symbol(id)'
// const prototype = {
//   toString(){
//     return JSON.stringify(this);
//   }
// }
// const obj = Object.create(prototype);
// obj.msg = 'Hi';
// console.log(obj.toString());
//''{"msg":"Hi"}''

// String({ msg: 'Hi' });
//'[object Object]'
// String(Symbol('id'));
//'Symbol(id)'

// `${{ msg: 'Hi' }}`
//'[object Object]'

// `${Symbol('id')}`
//Cannot convert a Symbol value to a string
// class MyClass {
//   static nameMethod() {
//     return this.name;
//   }
//   constructor() {
//     this.name = 'Mohit';
//   }
// }
// console.log(MyClass.nameMethod())

// let x;
// if(x= false === true) {
//   console.log(x)
// } else {
//   console.log('not x')
// }

// const roadMap = new Map();
// roadMap.set('a', 1);
// roadMap.b = 2;
// console.log(roadMap.size);

// console.log(JSON.stringify(roadMap, null, 2));

// const arr = [12, 'hi', undefined, 0, 12.9, null, ''];
// console.log(arr.filter(Boolean));

// Object.is('objectis', 'objectis'); // true
// Object.is(0, -0); // false
// const test = {a: 100};
// const cloneTest = test;
// const newTest = {a: 100};
// console.log(Object.is(test, cloneTest)) // true;
// console.log(Object.is(test, newTest)) // false;

// const entries = [
//   ['foo', [1, 2, 3, 4, 5, 6]],
//   ['baz', 42],
// ];
// const obj = Object.fromEntries(entries);
// console.log(obj); // Object { foo: [ 1, 2, 3, 4, 5, 6 ], baz: 42 }

// console.log(Object.fromEntries(undefined)); // undefined
// console.log(Object.fromEntries(null)); // null
// console.log(Object.fromEntries(true)); // boolean
// console.log(Object.fromEntries(100)); // number
// console.log(Object.fromEntries("hi")); // string
// console.log(Object.fromEntries({key: "value"})); // object
// console.log(Object.fromEntries([1,2,3])); // single value array

// const compress = (txt = "") => {
//   return txt.replace(/(\w)(\1+)/g, (_, m1, m2) => `${m1}${m2.length + 1}`);
// };
// console.log(compress("aaabbbb")); // a3b4

// const abbrev = (text = "") => {
//   if (text.length < 3) return text;
//   const first = text.charAt(0);
//   const last = text.slice(-1);
//   const remLen = text.length - 2;
//   return `${first}${remLen}${last}`;
// };
// console.log(abbrev("internationalization")); // i18n

// const word = /\w+/g;
// const abbrevPlus = (text = "") => {
//   return text.replace(word, (matched) => abbrev(matched));
// };
// console.log(abbrevPlus("I love javascript!")); // I l2e j8t!

// const isUniqueChars2 = (txt = "") => {
//   const chars = new Map();
//   // [...txt] is equivalent of Array.from(txt)
//   return ![...txt].some((char) => {
//     if (chars.has(char)) return true;
//     chars.set(char, true);

//     console.log('chars',chars);
//   });
// };
// console.log(isUniqueChars2("background")); // true
// console.log(isUniqueChars2("bawdyhouse")); // true
// console.log(isUniqueChars2("rhythm")); //false

// const sort = (str) => [...str].sort().join();
// const isPermuted = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   return sort(str1) === sort(str2);
// };
// console.log(isPermuted("abc", "acb")); // true

// const isPermuted2 = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   // map to keep count
//   const chars = {};
//   for (let i = 0; i < str1.length; i++) {
//     if (!chars[str1.charAt(i)]) chars[str1.charAt(i)] = 0;
//     chars[str1.charAt(i)]++;
//   }
//   for (let i = 0; i < str2.length; i++) {
//     if (!chars[str2.charAt(i)]) chars[str2.charAt(i)] = 0;
//     chars[str2.charAt(i)]--;
//     if (chars[str2.charAt(i)] < 0) return false;
//   }
//   return true;
// };
// console.log(isPermuted2("abc", "acb")); // true
// console.log(isPermuted2("abc", "acd")); // false

// const fixToFixed = num => Math.round(num * 100 + Number.EPSILON) / 100;

// console.log(fixToFixed(10.2345));

// 循环方式
// function cloneDeep3(source) {
//   if (!(typeof source === 'object' && source !== null)) {
//     return source;
//   }

//   const root = Array.isArray(source) ? [] : {};
//   // 定义一个栈
//   const loopList = [
//     {
//       parent: root,
//       key: undefined,
//       data: source,
//     },
//   ];

//   while (loopList.length > 0) {
//     // 深度优先
//     const node = loopList.pop();
//     const parent = node.parent;
//     const key = node.key;
//     const data = node.data;

//     // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
//     let res = parent;
//     if (typeof key !== 'undefined') {
//       res = parent[key] = Array.isArray(data) ? [] : {};
//     }

//     for (let keys in data) {
//       if (data.hasOwnProperty(keys)) {
//         if (typeof data[key] === 'object' && data !== null) {
//           loopList.push({
//             parent: res,
//             key: keys,
//             data: data[keys],
//           });
//         } else {
//           res[keys] = data[keys];
//         }
//       }
//     }
//   }

//   return root;
// }

// function debounce(fn, wait, immediate) {
//   let timer = null;
//   return function(...args) {
//     // 立即执行的功能(timer为空表示首次触发)
//     if (immediate && !timer) {
//       fn.apply(this, args);
//     }
//     // 有新的触发，则把定时器清空
//     timer && clearTimeout(timer);
//     // 重新计时
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, wait);
//   };
// }

// // 时间戳版本
// function throttle(fn, wait) {
//   // 上一次执行时间
//   let previous = 0;
//   return function(...args) {
//     // 当前时间
//     let now = +new Date();
//     if (now - previous > wait) {
//       previous = now;
//       fn.apply(this, args);
//     }
//   };
// }

// 定时器版本
// function throttle(fn, wait) {
//     let timer = null;
//     return function(...args) {
//         if (!timer) {
//             timer = setTimeout(() => {
//                 fn.apply(this, args);
//                 timer = null;
//             }, wait)
//         }
//     }
// }

// const isBrowserTabFocused = () => !document.hidden;
// // Example
// isBrowserTabFocused(); // true

// const counter = (selector, start, end, step = 1, duration = 2000) => {
//   let current = start,
//     _step = (end - start) * step < 0 ? -step : step,
//     timer = setInterval(() => {
//       current += _step;
//       document.querySelector(selector).innerHTML = current;
//       if (current >= end) document.querySelector(selector).innerHTML = end;
//       if (current >= end) clearInterval(timer);
//     }, Math.abs(Math.floor(duration / (end - start))));
//   return timer;
// };
// Example
// counter('#my-id', 1, 1000, 5, 2000); // 为 id="my-id" 的元素创建一个两秒的计时器

// const httpGet = (url, callback, err = console.error) => {
//   const request = new XMLHttpRequest();
//   request.open('GET', url, true);
//   request.onload = () => callback(request.responseText);
//   request.onerror = () => err(request);
//   request.send();
// };
// httpGet('https://jsonplaceholder.typicode.com/posts/1', console.log);
// Logs: {"userId": 1, "id": 1, "title": "sample title", "body": "my text"}

// const formatDuration = ms => {
//   if (ms < 0) ms = -ms;
//   const time = {
//     day: Math.floor(ms / 86400000),
//     hour: Math.floor(ms / 3600000) % 24,
//     minute: Math.floor(ms / 60000) % 60,
//     second: Math.floor(ms / 1000) % 60,
//     millisecond: Math.floor(ms) % 1000
//   };
//   return Object.entries(time)
//     .filter(val => val[1] !== 0)
//     .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
//     .join(', ');
// };
// // Examples
// formatDuration(1001); // '1 second, 1 millisecond'
// formatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'

// const triggerEvent = (el, eventType, detail) =>
//   el.dispatchEvent(new CustomEvent(eventType, { detail }));
// // Examples
// triggerEvent(document.getElementById('myId'), 'click');
// triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });

// const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
// delay(
//   function(text) {
//     console.log(text);
//   },
//   1000,
//   'later'
// );
// 一秒后记录 'later' 。

// const get = (from, ...selectors) =>
//   [...selectors].map(s =>
//     s
//       .replace(/\[([^\[\]]*)\]/g, '.$1.')
//       .split('.')
//       .filter(t => t !== '')
//       .reduce((prev, cur) => prev && prev[cur], from)
//   );
// const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
// // Example
// get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']

// const formToObject = form =>
//   Array.from(new FormData(form)).reduce(
//     (acc, [key, value]) => ({
//       ...acc,
//       [key]: value
//     }),
//     {}
//   );
// // Example
// formToObject(document.querySelector('#form')); // { email: 'test@email.com', name: 'Test Name' }

// const getURLParameters = url =>
//   (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
//     (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
//     {}
//   );
// // Examples
// getURLParameters('http://url.com/page?n=Adam&s=Smith'); // {n: 'Adam', s: 'Smith'}
// getURLParameters('google.com'); // {}

// const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
//   const { top, left, bottom, right } = el.getBoundingClientRect();
//   const { innerHeight, innerWidth } = window;
//   return partiallyVisible
//     ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
//         ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
//     : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
// };

// Examples
// elementIsVisibleInViewport(el); // (不完全可见)
// elementIsVisibleInViewport(el, true); // (部分可见)

// function CopyToClipboard(containerId) {
//   if (window.getSelection) {
//     if (window.getSelection().empty) {
//       // Chrome
//       window.getSelection().empty();
//     } else if (window.getSelection().removeAllRanges) {
//       // Firefox
//       window.getSelection().removeAllRanges();
//     }
//   } else if (document.selection) {
//     // IE?
//     document.selection.empty();
//   }
//   if (document.selection) {
//     var range = document.body.createTextRange();
//     range.moveToElementText(document.getElementById(containerId));
//     range.select().createTextRange();
//     document.execCommand('copy');
//   } else if (window.getSelection) {
//     var ranges = document.createRange();
//     range.selectNode(document.getElementById(containerId));
//     window.getSelection().addRange(ranges);
//     document.execCommand('copy');
//   }
// }

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }
// console.log(isNumeric(12345678912345678912)); // true
// console.log(isNumeric('2 ')); // true
// console.log(isNumeric('-32.2 ')); // true
// console.log(isNumeric(-32.2)); // true
// console.log(isNumeric(undefined)); // false
// // the accepted answer fails at these tests:
// console.log(isNumeric('')); // false
// console.log(isNumeric(null)); // false
// console.log(isNumeric([]));

// function isValidIP(str) {
//   const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
//   const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
//   return regex.test(str);
// }

// !!false === false;
// !!true === true;

// !!0 === false;
// !!parseInt('foo') === false; // NaN is falsy
// !!1 === true;
// !!-1 === true; // -1 is truthy
// !!(1 / 0) === true; // Infinity is truthy

// !!'' === false; // empty string is falsy
// !!'foo' === true; // non-empty string is truthy
// !!'false' === true; // ...even if it contains a falsy value

// !!window.foo === false; // undefined is falsy
// !!null === false; // null is falsy

// !!{} === true; // an (empty) object is truthy
// !![] === true; // an (empty) array is truthy; PHP programmers beware!

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }
// function escapeRegExp(string) {
//   return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
// }

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
// }

// const customers = [
//   {
//     prop_name: 'Negan',
//     prop_age: 45,
//     prop_weapon: 'Bat',
//     prop_email: 'negan@sanctuary.com',
//     prop_city: 'Washington',
//   },
//   {
//     prop_name: 'Daryl',
//     prop_age: 41,
//     prop_weapon: 'Crossbow',
//     prop_email: 'daryl.dixon@kickass.com',
//     prop_city: 'Atlanta',
//   },
//   {
//     prop_name: 'Rick',
//     prop_age: 45,
//     prop_weapon: 'Magnum 357',
//     prop_email: 'rick@alexandria.com',
//     prop_city: 'King County',
//   },
// ];
// const newKeys = ['firstName', 'age', 'weapon', 'email', 'city'];
// let result = customers.map(obj =>
//   Object.values(obj).reduce((acc, cur, i) => {
//     console.log('acc', acc);
//     console.log('newKeys', newKeys[i]);
//     console.log('cur', cur);
//     acc[newKeys[i]] = cur;
//     return acc;
//   }, {})
// );
// console.log(result);

// function generateUID(length){
//     return window.btoa(Array.from(window.crypto.getRandomValues(new Uint8Array(length * 2))).map((b) => String.fromCharCode(b)).join("")).replace(/[+/]/g, "").substring(0, length);
// }
// console.log(generateUID(22)); // "cFg3Upv2cE8cK8Xd7hHwWp"
// console.log(generateUID(5)); // "CQGkP"

// document.addEventListener('visibilitychange', event => {
//   if (document.visibilityState == 'visible') {
//     console.log('activated');
//   } else {
//     console.log('inactivated');
//   }
// });

// const data = [
//   { val1: 'abc', val2: 50 },
//   { val1: 'abc', val2: 50 },
//   { val1: 'cde', val2: 75 },
//   { val1: 'hji', val2: 35 },
//   { val1: 'bbc', val2: 25 },
// ];
// console.log(data.reduce((n, {val2}) => n + val2, 0));
