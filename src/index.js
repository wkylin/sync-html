function handlePromise(promiseList) {
  return promiseList.map(promise =>
    promise.then((res) => ({ status: 'ok', res }), (err) => ({ status: 'not ok', err }))
  )
}
Promise.all(handlePromise([Promise.reject(1),Promise.resolve(2),Promise.resolve(3)]))
  .then(res => console.log(res),err=>console.log(err))

if (!promise.allSettled) {
  Promise.allSettled = promises =>
    Promise.all(
      promises.map((promise, i) =>
        promise
          .then(value => ({
            status: "fulfilled",
            value,
          }))
          .catch(reason => ({
            status: "rejected",
            reason,
          }))
      )
    );
}

Promise.allSettled(promises).then(console.log);

const delay = n => new Promise(resolve => setTimeout(resolve, n));

const promises = [
  delay(100).then(() => 1),
  delay(200).then(() => 2),
  delay(300).then(() => {
    throw new Error("Boom");
  }),
];

Promise.all(promises).then(console.log).catch(console.error);
Promise.race(promises).then(console.log).catch(console.error);
// https://medium.com/trabe/using-promise-allsettled-now-e1767d43e480
// https://dev.to/vitalets/what-s-wrong-with-promise-allsettled-and-promise-any-5e6o
// Promise.all        -> Promise.allFulfilled
// Promise.allSettled -> Promise.allSettled
// Promise.race       -> Promise.oneSettled
// Promise.any        -> Promise.oneFulfilled

// Fiber
// 这个是React 16新出的一个非常重要的概念，完全理解了它，就相当于搞懂了React的一半。它和Element是一对一的关系，代表了Element要做的事情。
// Fiber主要做了两件事：Fiber解析了Element，更具象的描述了虚拟DOM树；
// 通过队列批处理state操作，然后产出的是effect list(可以想象成将老的View更新到新的状态所需要做的DOM操作的列表)。

// reconciler是React三大模块(即react、reconciler、renderer)中最复杂的模块:
// 1. React-- 这一模块主要是介绍 Element 和 Component 是如何构成的。
// 2. Reconciler-- 渲染器主要负责初始化虚拟DOM、更新虚拟DOM(涉及到更新diff算法)、发送消息给renderer。
// 3. Renderer-- 根据虚拟DOM渲染为平台特定的元素。

// JSX --> createElement(type, config, children) ---> render(element,container, callback)

// React将DOM抽象为虚拟DOM, 然后通过新旧虚拟DOM 这两个对象的差异(Diff算法),最终只把变化的部分重新渲染,提高渲染效率的过程;
// 1. 两个不同类型的元素会产生不同的树 和
// 2. 对于同一层级的一组子节点，它们可以通过唯一 key 进行区分
// React 分别对 tree diff、component diff 以及 element diff

// constructor: 构造函数，组件被创建时执行；
// componentDidMount: 当组件添加到 DOM 树之后执行；
// componentWillUnmount: 当组件从 DOM 树中移除之后执行，在 React 中可以认为组件被销毁；
// componentDidUpdate: 当组件更新时执行。


// 在 GraphQL 语法中，字段的间隔是通过换行符而不是逗号实现的。
// atob() 函数能够解码通过base-64编码的字符串数据。相反地，
// btoa() 函数能够从二进制数据“字符串”创建一个base-64编码的ASCII字符串。

// Non-blocking, for example, just means a request from another interaction can be processed without waiting for the prior interaction request to finish.
// This allowed web servers to serve countless requests concurrently.
// node --v8-options | grep "in progress"

const user = {
  firstName: "Sebastian",
  lastName: "McKenzie",
  getFullName: () => {
    // whoops! `this` doesn't actually reference `user` here
    console.log('this', this);
    return this.firstName + " " + this.lastName;
  },
  // use the method shorthand in objects
  getFullName2() {
    return this.firstName + " " + this.lastName;
  }
};

// console.log(user.getFullName());
// console.log(user.getFullName2());



// type C = { a: string, b?: number }
// function f({ a, b }: C): void {
//   // ...
// }
// let {a, b}: {a: string, b: number} = o

// function f({ a = '', b = 0 } = {}): void {
//   // ...
// }
// f()


//yarn global add ts-node

let arrayLike = {
  "0": 1,
  "1": 2,
  "length": 2
};
let newAry = Array.from(arrayLike, item => item *2)//[2,4]



var arr = [];
for (var i = 0; i < 2; i++) {
  arr[i] = function () {
    console.log(i);
  }
}


// arr[0](); // 2
// arr[1](); // 2
// let age = 100;
// let obj = {
//   age: 20,
//   say: () => {
//     console.log(this);
//     console.log(this.age)
//   }
// };
// obj.say(); // this.==>>window let声明的不在window对象上


var age = 100;
var obj = {
  age: 20,
  say: () => {
    alert(this.age)
  }
};

// obj.say(); //100//箭头函数this指向的是被声明的作用域里面，而对象没有作用域的，所以箭头函数虽然在对象中被定义，但是this指向的是全局作用域




//es6模块中，导出的并不是模块的值拷贝，而是这个模块的引用
//
// 在结合es6模块和commonJS模块的区别之后，我们知道es6的特点是静态解析，而commonJS模块的特点是动态解析的，因此，借于es6模块的静态解析，tree-shaking的实现才能成为可能。
// 在webpack中，tree-shaking指的就是按需加载，即没有被引用的模块不会被打包进来，减少我们的包大小，缩小应用的加载时间，呈现给用户更佳的体验。

// nrm add github https://npm.pkg.github.com

// fetch 不支持 timeout
const controller = new AbortController();
const options = {
  method: 'POST',
  signal: controller.signal,
  body: JSON.stringify({
    firstName: 'David',
    lastName: 'Pollock'
  })
};
const promise = fetch('/login', options);
const timeoutId = setTimeout(() => controller.abort(), 4000);

promise
  .then(response => {/* handle the response */})
  .catch(error => console.error('timeout exceeded'));

// Create an instance.
// const controller = new AbortController();
// const signal = controller.signal;

// Our timeout function
// const urlFetch = 'https://my-json-server.typicode.com/wkylin/angular-json-server/posts';
// const data = {};
// timeout(200, fetch(urlFetch, {
//   method: 'POST',
//   signal: signal,
//   body: data
// }))
//   .then(response => response.json())
//   .then(data => {
//     console.log('fetchData', data);
//   })
//   .catch(error => {
//     // Error Log
//     console.error('error>>',error);
//
//     // This can be because of request timed out
//     // so we abort the request for any case
//     controller.abort();
//   });

// https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
// https://medium.com/@szantoboldizsar/es6-fetch-with-timeout-and-abort-45476bcf6880
/**
 * Timeout function
 * @param {Integer} time (miliseconds)
 * @param {Promise} promise
 */
const timeout = (time, promise) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(new Error('Request timed out.'));
    }, time);
    promise.then(resolve, reject);
  });
};

let objArr = [{
  name: '小王',
  age: 14
}, {
  name: '大王',
  age: 41
}, {
  name: '老王',
  age: 61
}];

function objFn(obj, objIndex, objs) {
  console.log('obj', obj);
  console.log('objIndex', objIndex);
  console.log('objs', objs);
  return obj.age > 20;
}

// console.log(objArr.findIndex(objFn));


// window.onhashchange = function(event){
//   console.log(event.oldURL, event.newURL);
//   let hash = location.hash.slice(1);
//   document.body.style.color = hash;
// };
//
// history.pushState({color:'red'}, 'red', 'red')
// history.back();
// setTimeout(function(){
//   history.forward();
// },0);
// window.onpopstate = function(event){
//   console.log(event.state);
//   if(event.state && event.state.color === 'red'){
//     document.body.style.color = 'red';
//   }
// };

// 挂载阶段：
// constructor(props): 实例化。
// static getDeriverdStateFromProps 从 props 中获取 state。
// render 渲染。
// componentDidMount: 完成挂载。
//
// 更新阶段：
// static getDeriverdStateFromProps 从 props 中获取 state。
// shouldComponentUpdate 判断是否需要重绘。
// render 渲染。
// getSnapshotBeforeUpdate 获取快照。
// componentDidUpdate 渲染完成后回调。
//
// 卸载阶段：
// componentWillUnmount 即将卸载。
//
// 错误处理：
// static getDerivedStateFromError 从错误中获取 state。
// componentDidCatch 捕获错误并进行处理。


function duplicates(arr) {
  let newArr = [];
  for (let j = 0; j < arr.length; j++) {
    for (let i = j + 1; i < arr.length; i++) {
      console.log(arr[i], arr[j]);
      if (arr[i].a == arr[j].a) {
        newArr.push(arr[i]);
      }
      // if(arr[j] == arr[i]){
      //   newarr.push(arr[i]);
      // }
    }
  }
  return newArr;
}

// console.log(duplicates([{a:1}, {a:2}, {a:1}, {a:2}, {a:3}]));


function fnTime() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log('innerI', i);
      console.log('inner', new Date());
    }, 5000);
  }
}

// fnTime();
// console.log(i);
// console.log('outer',new Date());


// 'use strict';
function Person() {
}

// console.log(Person.prototype);
// console.log(Person.__proto__);
// console.log(Person.prototype.constructor === Person);


// (() => {}).prototype; // undefined
// (function() {}).prototype; // {constructor: f}

const objThat = {
  something: function () {
    console.log(this);
  }
};
// objThat.something();

const action = objThat.something;
// action();


// 正向代理 理解为vpn
// 反向代理 借钱-->> A--没有>> A从A朋友那借了之后再给到 B, A 反向代理

// new lifecycle
// 挂载
// constructor
// getDerivedStateFromProps
// render
// componentDidMount
// 更新
// getDerivedStateFromProps
// shouldComponentUpdate
// render
// getSnapshotBeforeUpdate
// componentDidUpdate
//
// 卸载
// componentWillUnmount

// 组件树的生命周期调用栈走的是一个Z字形。
// app.render();
// child.render();
// grandson.render();
// // divide
// grandson.componentDidMount();
// child.componentDidMount();
// app.componentDidMount();

// React里面传递props有一种写法，如果传递的是一个对象，可以用扩展运算符很方便的传递。
// this.state并不是一个不可变对象，你(非得较劲的话)是可以直接改变它的属性的。但是它不会触发render生命周期钩子，也就不会渲染到UI上。
// 而且合并是浅合并。Object.assign
// 只有第一层的属性才会合并，更深层的属性都会覆盖。
// 它不是真正的异步，只是React有意识的将状态攒在一起批量更新。
// this.setState()会触发render生命周期钩子，也就会运行组件的diff算法。如果每次setState都要走这一套流程，不仅浪费性能，而且是完全没有必要的。
// 真正异步回调和原生事件回调中的setState不是批量更新的, 是同步的。
// 加上React也没有this.setProps方法，所以不需要开发者自我约束，this.props就是不可变的。
// Consumer的children必须是一个函数。
// <Consumer>
//   {({ lang }) => <div>{lang === 'en' ? 'todo' : '要做'}</div>}
// </Consumer>
// 关于React摒弃了表单双向数据绑定的问题，它只是想把单向数据流做的更彻底一点。其实表单的状态，归根结底是组件内部的状态，跟单向数据流无关。
// 什么是双向数据绑定？就是表单输入，与之绑定的变量自动获取到输入的值，变量的值改变，与之绑定的表单的值随即改变，两种流向都自动绑定了。
// 但其实双向数据绑定不就是value的单向绑定加onChange事件监听么！React也可以通过两步做到。
// 总结：双向数据绑定不影响单向数据流，React也可以实现双向的同步。
// 函数组件没有办法实例化，除了一些逻辑判断之外，它的功能只是返回UI。
// 正确的做法是永远不修改原数据，生成新数据时依赖于原数据的浅拷贝，避免新数据和老数据指向同一个引用。
// 不过React早就预测到你会这么干的，所以它只能随你的脾气，只要组件里定义了shouldComponentUpdate生命周期钩子，PureComponent类的自动优化就不再起作用了。
// connect方法是用来将redux中的state作为props传给组件的。
// 基于Event对象创建了一个合成事件对象
// 这回stopImmediatePropagation不仅不能阻止body事件，body事件还会先于button触发。铁证，React所有事件都是由document统一分发的。
// event.persist()
// event.nativeEvent.stopImmediatePropagation() stopImmediatePropagation不仅会阻止顶层事件的冒泡，连自身元素绑定的其他事件也会阻止。因为同一个元素可以绑定多个事件，而事件触发顺序是根据绑定顺序来的，
// event.nativeEvent.stopPropagation();
// React会把同一类型的事件push到一个队列里，
// bind的性能是堪忧的。而且你发现没有，每一次重新render都会重新bind一次。
// 可是得额外包裹一层箭头函数，而且每次触发事件都会生成一个箭头函数。
// 当然事件需要传参的时候没的说，必须得包裹一层箭头函数。
// 缺点是如果事件比较多，构造函数里会有点拥挤。
// 而且往深层处想，这个回调被挂载在了原型上，同时也被挂载在了实例上。重复挂载。
// 属性初始化器的写法不会将回调重复挂载，不需要重复绑定，语法也相当优雅。
// 先把createRef的执行结果返回给一个实例属性，然后通过该实例属性获得DOM元素的引用。
// createRef初始化动作要在组件挂载之前，如果是挂载之后初始化，则无法得到DOM元素的引用。
// 真正的DOM元素引用在current属性上。
// 出于不可描述的原因，如果你想获取一个子组件的ref引用，那么子组件必须是class组件。
// 因为你获取的实际上是子组件的实例，而函数式组件是没有实例的。
// 所有获取ref引用的方式，如果想要获取子组件而不是DOM元素，子组件都不能是函数式组件。
// 需要特别注意，使用forwardRef时，该组件必须是函数式组件。原因可能是React不想破坏class组件的参数体系。
// 初始挂载的时候，React确实是会使用innerHTML接口，但是一旦挂载完毕，后续的更新都是打补丁，也就是精准的局部更新。
// 每次setState都会触发diff算法吗？
// 当然不会
// React生命周期大致可以分为三个阶段：挂载，更新，卸载。在挂载阶段内和一次更新阶段内，diff算法只会运行一次，这就是打补丁的频率。
// React不推荐使用列表的索引来充当key属性值，因为对列表进行插入或者删除操作时，索引也会相应的改变，它是不稳定的，key存在的意义也就没有了
// React这个开源项目大体上可以分为两部分，一部分是构建抽象UI，并提供变化检测，叫Reconciler。
// 另一部分是将抽象UI渲染到具体的平台上，叫Renderer。
// Reconciler的主要工作是计算，Renderer的主要工作是排版和绘制。
// requestAnimationFrame && requestIdleCallbackAPI

// 单向数据流:
// 用户触发View上的事件发送Action，Action只能通过Dispatcher.dispatch方法发送出去，Store更新自身的数据然后View根据Store重新渲染。一环扣一环，只能按照这个流程走下去。

// 执行某个任务不会对外部产生影响，也就是所谓的没有副作用。
// Store是存储State的容器。
// Redux是基于观察者模式的
// Redux的规矩：createStore的默认值优先级更高，所以不会打架。
// 当我们使用Redux时，我们希望每发射一个动作，应用的状态自动发生改变，从而触发页面的重新渲染。
// connect接口的意义主要有三点：
// 封装用context从根组件获取数据的细节。
// 封装Redux订阅器的细节。
// 作为一个容器组件真正连接React和Redux。
// 现在Action有两种，纯对象和异步请求函数。
// compose传入的函数是从右到左依次执行的。
// export default function compose(...funcs) {
//   if (funcs.length === 0) {
//     return arg => arg;
//   }
//   if (funcs.length === 1) {
//     return funcs[0];
//   }
//   return funcs.reduce((a, b) => (...args) => a(b(...args)));
// }

// applyMiddleware的目的只有一个：用所有中间件组装成一个超级dispatch，并将它覆盖原生的dispatch。
// 中间件是在dispatch前后植入一段逻辑的话，那么增强器顾名思义是要增强整个Store的能力。很明显它的侵入性更强。
// 如果说中间件改造的是dispatch，那么增强器改造的就是Store。


// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
let objArrow = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  }
};
// objArrow.b();
// undefined, Window{...}
// objArrow.c();
// 10, Object {...}
let FooArrow = () => {
};
// console.log(FooArrow.prototype); // undefined

let FooArrowNew = () => {
};
// let foo = new FooArrowNew(); // TypeError: Foo is not a constructor
let callback;
// callback = callback || (() => {});
// let empty = () => {};
// console.log((() => 'foobar')());

// sessionStorage是页面级别的，仅在一个标签页生效，如果同一个浏览器同时打开多个标签页，且都访问同一个域名，
// sessionStorage是不会在这多个标签页共用的，即每个标签页都有自己的sessionStorage。
// window.addEventListener("storage", function(ev){
// 1. 该Cookie是服务器自动颁发给浏览器的，不用我们手工创建的。该Cookie的maxAge值默认是-1，也就是说仅当前浏览器使用，不将该Cookie存在硬盘中，并且各浏览器窗口间不共享，关闭浏览器就会失效。
// 产生 sessionID：session 是基于 cookie 的一种方案，所以，首先要产生 cookie。client 第一次访问 server，server 生成一个随机数，命名为 sessionID，并将其放在响应头里，以 cookie 的形式返回给 client，client 以处理其他 cookie 的方式处理这段 cookie。
// 保存 sessionID： server 将要保存的数据保存在相对应的 sessionID 之下，再将 sessionID 保存到服务器端的特定的保存 session 的内存中保存 sessionID： server 将要保存的数据保存在相对应的 sessionID 之下，
// 再将 sessionID 保存到服务器端的特定的保存 session 的内存中
// 使用 session： client 再次访问 server，会带上首次访问时获得的 值为 sessionID 的cookie，server 读取 cookie 中的 sessionID，根据 sessionID 到保存 session 的内存寻找与 sessionID 匹配的数据，若寻找成功就将数据返回给 client
// 为防止内存溢出，服务器会把长时间内没有活跃的Session从内存删除。
// 这个时间就是Session的超时时间。如果超过了超时时间没访问过服务器，Session就自动失效了。
// Session 的运行依赖Session ID，而 Session ID 是存在 Cookie 中的，也就是说，如果浏览器禁用了 Cookie，Session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 Session ID，也就是地址重写）
//






function isPromise(val) {
  return val && typeof val.then === 'function';
}

// const array = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
// console.log(array.reduce(reducer));  // 10

// let array = [[1, 2], [3, 4], [5, 6]];
// const reducer = (acc, cur) => acc.concat(cur);
// let result = array.reduce(reducer, [])   // 将 [] 作为回到函数第一个参数
// console.log(result); //[1, 2, 3, 4, 5, 6]

// let names = ['jser', 'jser', 'javaer', 'javaer', 'phper', 'pythener']
// let obj = {};
// names.reduce((acc, cur) => {
//   acc[cur]? acc[cur]++ : acc[cur] = 1;
//   return acc;
// }, obj);  // 将 obj 作为回到函数第一个参数 obj
// console.log(obj);


const asyncFunction = async () => {
};
// console.log(typeof asyncFunction); // 'function'
// console.log(asyncFunction.constructor.name); //"AsyncFunction"
// console.log(Object.getPrototypeOf(async function(){}).constructor);
// 不应该在 async function，中 return await。因为 async function 的返回值总是封装在 Promise.resolve，return await 实际上并没有做任何事情，
// 只是在 Promise resolve 或 reject 之前增加了额外的时间。

// 首先回顾下构造函数、原型、和实例之间的关系：
// 每一个构造函数都有一个原型对象 F.prototype，原型对象都包含一个指向构造构造的指针 constructor，
// 而实例都包含一个指向原型对象的内部指针 __proto__。

function F() {
}

let newF = new F();
// console.log(F.prototype.constructor === F);
// console.log(newF.__proto__ === F.prototype);
// console.log(Object.prototype.__proto__ === null);

// 从 instanceof 能够判断出 [].__proto__ 指向 Array.prototype，而 Array.prototype.__proto__ 又指向了 Object.prototype，最终 Object.prototype.__proto__指向了 null，标志着原型链的结束。
// 使用 new 操作符来调用函数时，会自动执行下面的操作：
// 1.创建一个新的空对象；
// 2.这个对象会被执行 [[prototpye]] 连接；
// 3.这个新对象会绑定到函数调用的 this；
// 4.如果函数没用返回其他对象，那么 new 调用的函数会自动返回这个新对象。

function _new() {
  let o = {}; // 创建一个空对象
  let C = arguments[0];  // 获得构造函数
  o.constructor = C;     // 将空对象的 constructor 默认指向构造函数
  o.__proto___ = C.prototype;  // 进行 [[prototype]] 连接
  let res = C.apply(o, arguments);  // 进行 this 绑定 并获得构造函数返回值
  // 返回处理
  return typeof res === "object" ? res : o;
}

// 测试
function Person() {
  this.name = "my person";
}

let p = _new(Person);
// console.log(p.name); // my person
// console.log(p.constructor);  // Person


// {} + {} 		// "[object Object][object Object]" NaN
// [1,2,3] + [] 	//	 "1,2,3" + "" -> "1,2,3"
// [] + {} 		// "" + "[object Object]" -> "[object Object]"
// {} + []		    // 0 -> {} 被当做一个块（表达式），相当于执行 ({},+[])，返回值为小括号最后面的表达式的返回值。
// {q:1} + [] 		// 0
// let a = {q:1};
// a + []	 //  "[object Object]"     变量形式运算正常
// [] + a 	 // "[object Object]"
// {} == []  => 报错   ({}, ==[]) -> 报错
// [] == 0   => true	[] -> "" -> 0
// ![] == 0  => true   ![] -> false -> 0
// [] == ![] => true   [] -> "" -> 0    ![] -> false -> 0
// [] == []  => false  比较引用地址
// {} == {}  => false  比较引用地址
// {} == !{} => false  !{} -> false -> 0    {} -> "[object Object]" -> NaN
// "hello" - 1 // NaN
// [] + [] // ''
// console.log(undefined == undefined); // true
// console.log(null == undefined); // true
// console.log(0 == undefined); // false
// console.log('' == undefined); // false
// console.log(false == undefined); // false

function outerFunction(arg) {
  let variableInOuterFunction = arg;
  
  function bar() {
    console.log(variableInOuterFunction); // 访问了外部域的变量
  }
  
  // 调用本地函数来演示它访问了 arg
  bar();
}

// outerFunction("hello closure"); // 输出 hello closure！

// JavaScript 中所有的对象都包含 __proto__ 成员。这个成员在旧浏览器中是常常不可访问的（有的时候文档引用这个魔法属性为 [[prototype]]）它有一个目的：如果一个属性在查找时在一个对象上找不到（例如 obj.property）那么它会去查找 obj.__proto__.property。如果还是找不到那么去找 obj.__proto__.__proto__.property 直到两者之一被满足：找到了或者是最后的.__proto__自身为 null。这解释了为什么 JavaScript 表示支持自带的原型继承。
// let foo = {};
// // 在 foo 和 foo.__proto__ 中设置
// foo.bar = 123;
// foo.__proto__.bar = 456;
// console.log(foo.bar); // 123
// delete foo.bar; // 从对象中删除
// console.log(foo.bar); // 456
// delete foo.__proto__.bar; // 从 foo.__proto__ 中删除
// console.log(foo.bar); // undefined


//单元测试、功能测试 集成测试
// xxx starter kit

const debounce = (cb, delay) => {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(context, args);
      timer = null;
    }, delay);
  };
};

const throttleUserTimer = (cb, delay) => {
  let timer = null;
  return function (...args) {
    const context = this;
    if (!timer) {
      timer = setTimeout(() => {
        cb.apply(context, args);
        timer = null;
      }, delay);
    }
  };
};


// 首先执行script(整体代码)宏任务，从上往下执行，遇到宏任务放入宏任务队列，
// 遇到微任务放入微任务队列 => 执行微任务队列的任务，然后执行宏任务队列的第一个任务
// console.log("script start");
// setTimeout(function () {
//   console.log("a");
//   setTimeout(function () {
//     console.log("b")
//   });
//   new Promise(function (resolve) {
//     console.log("c");
//     resolve();
//   }).then(function () {
//     console.log("d");
//     setTimeout(function () {
//       console.log("e")
//     })
//   })
// });
// new Promise(function (resolve) {
//   console.log("f");
//   resolve()
// }).then(function () {
//   console.log("g")
// });
// setTimeout(function () {
//   console.log("h")
//   setTimeout(function () {
//     console.log("i")
//   });
//   new Promise(function (resolve) {
//     console.log("j");
//     resolve();
//   }).then(function () {
//     console.log("k");
//     setTimeout(function () {
//       console.log("l");
//       new Promise(function (resolve) {
//         console.log("m");
//         resolve()
//       }).then(function () {
//         console.log("n");
//         setTimeout(function () {
//           console.log("o")
//         })
//       })
//     })
//   })
// });
//第一次宏任务打印: "script start" "f"
//第一次微任务打印: "g"
//第二次宏任务打印: "a" "c"
//第二次微任务打印: "d"
//第三次宏任务打印: "h" "j"
//第三次微任务打印: "k"
//第四次宏任务打印: "b"
//第四次微任务打印: 无
//第五次宏任务打印: "e"
//第五次微任务打印: 无
//第六次宏任务打印: "i"
//第六次微任务打印: 无
//第七次宏任务打印: "l" "m"
//第七次微任务打印: "n"
//第八次宏任务打印: "o"

//最终打印顺序为:
//"script start" "f" "g" "a" "c" "d" "h" "j" "k" "b" "e" "i" "l" "m" "n" "o"


function middle1(api) {
  return (next) => (num3) => {
    return next(num3);
  };
}

//这里改写   不在中间件的地方求值
function middle2(api) {
  return (num2) => (num) => {
    return num2(num);
  };
}

//将处理函数封装
function applyMiddleware(arg1, arg2) {
  const api = {};
  let b = arg2(api)(function (num) {
    console.log(num + '：我是外面传来的数据');
  });
  let newDispatch = arg1(api)(b);
  return {
    dispatch: newDispatch
  };
}

// applyMiddleware(middle1,middle2).dispatch(6); //=>6：我是外面传来的数据


function createStore(stateChanger) {
  let state = null;
  const listeners = [];
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
  };
  const dispatch = (action) => {
    state = stateChanger(state, action);
    listeners.forEach((listener) => listener());
  };
  dispatch({});
  return { getState, dispatch, subscribe };
}

function reducer(state, action) {
  if (!state) {
    return {
      people: {
        eyes: '有点疼',
        color: 'red'
      }
    };
  }
  switch (action.type) {
    case 'EYES_QUESTION_LOG':
      return Object.assign({}, state, {
        people: {
          ...state.people,
          eyes: action.data
        }
      });
      break;
    case 'EYES_COLOR_LOG':
      return Object.assign({}, state, {
        people: {
          ...state.people,
          color: action.data
        }
      });
      break;
    default:
      break;
  }
}

function render(data) {
  let ele = document.getElementById('cont');
  ele.innerHTML = data.people.eyes;
  ele.style.color = data.people.color;
}

//将现有的数据集合和处理方式传入进去
const store = createStore(reducer);
store.subscribe(() => {
  render(store.getState());
});
store.dispatch({
  type: "EYES_QUESTION_LOG",
  data: "差不多了哦"
});


const addPlus = (obj, y) => {
  obj.x = 3;
  return obj.x + y;
};
const objX = {
  x: 1
};
// console.log(addPlus(objX,2)); //5
// console.log(objX.x) ; // 3

// function add(num1, num2, num3){
//   return num1 + num2 + num3;
// }
// add(1, 2, 3) //=>6
//改为柯里化形式
function addCre(num1) {
  return (num2) => (num3) => {
    return num1 + num2 + num3;
  };
}

// console.log(addCre(1)(2)(3));  //=>6


// createPortal：将组件渲染到 React 组件树以外的 DOM 节点中。
// hydrate：类似 render，如果有使用 reactDomServer 渲染，可以一起使用避免页面闪动，它会尽可能复用已有的 DOM 元素。
// React 是引用传值 可以修改props的属性, 不建议
// 第一，你的修改 React 本身并不知道，所以不会有组件的重新渲染；
// 第二，你修改后的值可能会被父级的变化重新覆盖。
// 即应该总是认为props中的数据是不可变的，immutable data；
// 另外 Ref 不可作用于函数定义式组件上，因为它没有实例。
// HOC 可以用来实现代码复用、解决交叉组件的数据、状态共享等，用以处理跨层级的数据传递。
//  React，则既没有脏检查，也没有 Getter/Setter。它是主动式的，即用户需要更新 view 了，则需要主动去调用 setState（或者 forceUpdate），来告诉 React 来重新 render，然后 React 会启动虚拟 DOM 渲染、差值比较，计算出变动的部分，然后更新 DOM 树。
// 所谓的对外部有副作用，就是我们在函数中进行了：
// 发出 HTTP 调用
// 改变外部数据或者 Dom 状态
// console.log()
// Math.random()
// 获取的当前时间

// 虚拟DOM
// type: 指定元素的标签类型，如'li', 'div', 'a'等
// props: 表示指定元素身上的属性，如class, style, 自定义属性等
// children: 表示指定元素是否有子节点，参数以数组的形式传入
// 比较规则
//
// 新的DOM节点不存在{type: 'REMOVE', index}
// 文本的变化{type: 'TEXT', text: 1}
// 当节点类型相同时，去看一下属性是否相同，产生一个属性的补丁包{type: 'ATTR', attr: {class: 'list-group'}}
// 节点类型不相同，直接采用替换模式{type: 'REPLACE', newNode}
// 执行中间件的一个关键途径是信息传递。
// //creatStore(reducer,middelewareFun)  只有两个参数时（第二个参数为中间件函数，preloadState可选） 将第二个参数视为enhancer增强函数

function MathHelper() {
}

MathHelper.PI = 3.1415926;

MathHelper.areaOfCircle = function (radius) {
  // return radius * radius * this.constructor.PI;
  console.log(this);
  console.log(this === MathHelper.prototype);
  console.log(MathHelper.prototype);
  return radius * radius * this.constructor.PI;
};

let math = new MathHelper();

// console.log(math.areaOfCircle(5));


function ObjPerson(age, sex) {
  this.age = age;
  this.sex = sex;
}

let me = new ObjPerson('wk', 'man');
me.email = 'wkylin@qq.com';

// console.log(me);
// for(let key in me){
//   console.log(`${key}: ${me[key]}`);
// }


const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const objaa = Object.assign({}, v1, null, v2, undefined, v3, v4);
// console.log(objaa);

const aas = { name: 'json', things: [1, 2, 3], age: 2 };
const bb = Object.assign(aas, { sex: 1 });
// console.log(bb);
// console.log(aas === bb);
// console.log(bb.things.push(111));
// console.log(aas.things);
// console.log(aas);
// console.log(bb);


// https://medium.com/@fastphrase/when-to-use-redux-f0aa70b5b1e2
// 1. 需要将相同的应用程序状态映射到多个容器组件。
// 2. 可以从任何地方访问的全局组件。
// 3. 属性在多个层级组件中传递
// 4. 使用set State的状态管理正在浮动组件。
// 5. 缓存页面状态

// app.get('/*', (req, res) => {
//   res.sendfile(path.join(__dirname, 'index.html'))
// })
// devServer: {
//   historyApiFallback: true,
// }


// 猴子补丁主要有以下几个用处：
// 1.在运行时替换方法、属性等
// 2.在不修改第三方代码的情况下增加原来不支持的功能
// 3.在运行时为内存中的对象增加patch而不是在磁盘的源代码中增加

// middleware 拓展了 Redux dispatch 函数的功能；enhancer 拓展了 Redux store 的功能
// 中间件----它提供的是位于 action 被发起之后，到达 reducer 之前的扩展点。
// middleware 的函数签名是 ({ getState, dispatch }) => next => action
//可以使用任意多异步的 middleware 去做你想做的事情，但是需要使用普通对象作为最后一个被 dispatch 的 action ，来将处理流程带回同步方式）
// const store = createStore(
//   reducer,
//   preloadedState,
//   applyMiddleware(...middleware)
// )

const timeoutScheduler = store => next => action => {
  if (!action.meta || !action.meta.delay) {
    return next(action);
  }
  
  const timeoutId = setTimeout(() => next(action), action.meta.delay);
  
  return function cancel() {
    clearTimeout(timeoutId);
  };
};
const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};
// function logger({ getState }) {
//   return next => action => {
//     console.log('will dispatch', action);
//
//     // 调用 middleware 链中下一个 middleware 的 dispatch。
//     const returnValue = next(action);
//
//     console.log('state after dispatch', getState());
//
//     // 一般会是 action 本身，除非
//     // 后面的 middleware 修改了它。
//     return returnValue
//   }
// }

// console.log(Math.random().toString(36).substr(2));
// console.log(Math.random().toString(36).substring(2, 15));

// Mixin（混入）是一种通过扩展收集功能的方式，它本质上是将一个对象的属性拷贝到另一个对象上面去，
Object.assign({}, { name: 'wkylin', age: 23 });

// 不过你可以拷贝任意多个对象的任意个方法到一个新对象上去，这是继承所不能实现的。

// 装饰器(decorator)模式能够在不改变对象自身的基础上，在程序运行期间给对像动态的添加职责。
// 与继承相比，装饰器是一种更轻便灵活的做法。
// 调用高阶组件的时候并不能获取到原组件的真实ref，需要手动进行传递
// forwardedRef


const compose = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
// compose(logger,visible,style)(Input);

//高阶组件并不能像透传props那样将refs透传，我们可以用一个回调函数来完成ref的传递：

function passthru(literals, ...values) {
  
  console.log(literals);
  console.log(values);
  let output = "";
  let index;
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }
  
  output += literals[index];
  return output;
}

// let total = 30;
// let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
// console.log(msg);

function func(a) {
  arguments[0] = 99;   // 更新了arguments[0] 同样更新了a
  console.log(a);
  console.log(typeof arguments);
}

// func(10);


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

const fo = new foosss();
// console.log(fo.getBar());


const aArray = ['1', '2'];

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

const objAa = {
  name: 'wkylin',
  age: 23,
  getName: function () {
    return (() => console.log(this.name))();
    // console.log(this.name);
  }
};

objAa.getAge = function () {
  console.log(this.age);
};
// console.log(objAa);
// objAa.getName();
const objAb = { ...objAa };
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
let caClone = { ...ca };
// console.log(ca.getName());
// console.log(caClone.getName());


function fak() {
  let a = 1;
  
  a = 2;
  let b = g();
  a = 3;
  
  return b;
  
  function g() {
    return a;
  }
}

// console.log(fak()); // returns 2


function fff() {
  let a = 10;
  return function g() {
    let b = a + 1;
    return b;
  };
}

let g = fff();
// console.log(g()); // returns 11;
// console.log(a);

let strss = "The rain in SPAIN stays mainly in the plain";
// let res = strss.match(/ain/gi);
// let res = strss.search(/ain/gi);

let str1 = "ab";
let str2 = "ab";
let obj3 = { name: 'wkylin', age: 23 };
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

let jelly = { name: 'jelly', age: 20 };
let mary = { name: 'mary', age: 25 };

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
  set(target, key, value) {
    target[key] = value.match(/[0-9]/g).join('');
  },
  get(target, key) {
    return target[key].replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }
};

const phoneNumber = new Proxy({}, phoneHandler);

// phoneNumber.home='139 1553 1553';

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
  [Symbol('lily')]: { grade: 60, gender: 'female' },
  [Symbol('nina')]: { grade: 30, gender: 'male' },
  [Symbol('nina')]: { grade: 90, gender: 'female' }
};

for (let key in classRoom) {
  console.log(key);
}

const syms = Object.getOwnPropertySymbols(classRoom).map((room) => classRoom[room]);

// console.log(syms); 不能遍历，可以内部使用


const fruitss = ['apple', 'banana', 'pear'];
const newFruits = ['orange', 'mongo'];

// fruitss.push.apply(fruitss, newFruits);
// fruitss.push(...newFruits);
// console.log(fruitss);

const iKeys = ['name', 'age', 'birthday'];
const iValues = ['wkylin', 2, '2015-09-03'];
const wObj = {
  [iKeys.shift()]: iValues.shift(),
  [iKeys.shift()]: iValues.shift(),
  [iKeys.shift()]: iValues.shift()
};
// console.log(wObj);


// 可迭代对象 接口/ [Symbol.iterator]

function sums() {
  let total = 0;
  console.log(arguments);
  for (let num of arguments) {
    total = total + num;
  }
  
  console.log(total);
  return total;
}

// sums(1, 2, 3);
// for of 不支持对象/ 支持string nodeList

const objb = {
  a: 1,
  b: 2
};
// for(let value of objb){
//   // console.log(value);
// }


// Array.prototype.myPro = 'my prototype'
const fruits = ['apple', 'Banana', 'Orange', 'Mango'];
fruits.myFruits = ' my fruits';

for (let [index, fruit] of fruits.entries()) {
  // console.log(`${index} is ${fruit}`);
}

for (let i = 0; i < fruits.length; i++) {
  // console.log(fruits[i]);
}

fruits.forEach((fruit) => {
  
  // if(fruit == 'apple'){
  //   break;
  // }
  // console.log(fruit);
  
});

for (let fruit in fruits) {
  // console.log(fruit);
  // console.log(fruits[fruit]);
}

for (let fruit of fruits) {
  // console.log(fruit);
}


const obja = {
  // sister:0,
  // sister:null,
  sister: undefined,
  father: 'wkylin'
};

const { sister = 'aa', father } = obja;

// console.log(sister);
// console.log(father);

const sum = function () {
  return Array.from(arguments)
    .reduce((prevSum, value) => {
      return prevSum + value;
    }, 0);
};

// const sum = (...args) => {
//   return args.reduce((prevSum, value) => {
//       return prevSum + value;
//   }, 0)
// };
// console.log(sum(1,2,3));
// sum(1,2,3);

function multiply(a = 3, b = 5) {
  return a * b;
}

// console.log(multiply(1, 2));
// console.log(multiply(undefined, 2));
// console.log(multiply(null, 2));


function highlight(strings, ...values) {
  // console.log('strings', strings);
  // console.log('values', values);
}

const users = 'Mary';
const topic = 'Learn to uses markdown';
const sentence = highlight`Jhone ${users} has commmened on your topic ${topic} aa`;

// console.log(sentence);

// let name = 'wkylin';
// console.log(window.name);

(function () {
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
  let abortPromise = new Promise(function (resolve, reject) {
    abortFn = function () {
      reject('abort promise');
    };
  });
  
  //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
  let aborTablePromise = Promise.race([
    fetch_promise,
    abortPromise
  ]);
  
  setTimeout(function () {
    abortFn();
  }, timeout);
  
  return aborTablePromise;
}


function fetchWithTimeout() {
  const FETCH_TIMEOUT = 5000;
  let didTimeOut = false;
  
  new Promise(function (resolve, reject) {
    const timeout = setTimeout(function () {
      didTimeOut = true;
      reject(new Error('Request timed out'));
    }, FETCH_TIMEOUT);
    
    fetch('https://davidwalsh.name/?xx1')
      .then(function (response) {
        // Clear the timeout as cleanup
        clearTimeout(timeout);
        if (!didTimeOut) {
          console.log('fetch good! ', response);
          resolve(response);
        }
      })
      .catch(function (err) {
        console.log('fetch failed! ', err);
        
        // Rejection already happened with setTimeout
        if (didTimeOut) return;
        // Reject with error
        reject(err);
      });
  })
    .then(function () {
      // Request success and no timeout
      console.log('good promise, no timeout! ');
    })
    .catch(function (err) {
      // Error: response error, request timeout or runtime error
      console.log('promise error! ', err);
    });
}


// console.log('1');

setTimeout(function () {
  // console.log('2');
}, 100);

// console.log('3');

async function test() {
  console.log('4');
  await Promise.resolve();
  console.log('5');
}

// test();

let abcc = new Promise(function (resolve) {
  setTimeout(() => {
    resolve();
    // console.log('6');
  });
});

// console.log('7');

abcc.then(function () {
  // console.log('8');
});

// 13475862


let isValid = function (s) {
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let char of s) {
    if (char in map) {
      stack.push(char);
    } else {
      if (!stack.length || char != map[stack.pop()]) {
        return false;
      }
    }
  }
  
  // 如果最后stack 里没有元素了， 就一定是匹配的
  return !stack.length;
};

// console.log(isValid('{(){}[]}'));

function getSum(arr, sum) {
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


let longestPalindrome = function (s) {
  let len = s.length;
  let result;
  let i, j, L;
  let dp = Array(len).fill(0).map(x => Array(len).fill(0));
  //console.log(dp);
  if (len <= 1) {
    return s;
  }
  // 只有一个字符的情况是回文
  for (i = 0; i < len; i++) {
    dp[i][i] = 1;
    result = s[i];
  }
  
  // L是i和j之间的间隔数（因为间隔数从小到大渐增，所以大的间隔数总能包含小的间隔数）
  // i     j
  // abcdcba.length = L   所以 L = j-i+1; => j = i+L-1;
  for (L = 2; L <= len; L++) {
    // 从0开始
    for (i = 0; i <= len - L; i++) {
      j = i + L - 1;
      if (L == 2 && s[i] == s[j]) {
        dp[i][j] = 1;
        result = s.slice(i, i + L);
      } else if (s[i] == s[j] && dp[i + 1][j - 1] == 1) {
        dp[i][j] = 1;
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
strNumber.replace(re, ($0, $1) => {
  if (num < $0.length) {
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


// let user = {
//   name: 'Daily'
// };
// // console.log(user.name);
// user = null;
// console.log(user.name);
//
// let weakMap = new WeakMap();
// let obj = {};

// weakMap.set(obj, 'Private');
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

// const arr = [10, 12, 15, 21];
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

