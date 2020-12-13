
// const data = [
//   {
//     id: '1',
//     name: 'abc',
//   },
//   {
//     id: '2',
//     name: 'cde',
//   },
//   {
//     id: '3',
//     name: 'efg',
//   },
//   {
//     id: '4',
//     name: 'hij',
//   },
//   {
//     id: '5',
//     name: 'klm',
//   },
// ];
// const data1 = [
//   {
//     code: '23',
//     id: '1',
//     name: 'abc',
//   },
//   {
//     code: '45',
//     id: '2',
//     name: 'cde',
//   },
// ];
// const result = data.filter(({ id }) => !data1.some(val => val.id === id));
// console.log(result);

// const surveyResponses = [
//   {
//     createdAt: new Date(),
//     responses: [
//       {
//         questionId: 'data1',
//         response: 'abc',
//       },
//     ],
//   },
//   {
//     createdAt: new Date(),
//     responses: [
//       {
//         questionId: 'data2',
//         response: 'cde',
//       },
//     ],
//   },
// ];
// const result = [].concat(
//   ...surveyResponses.map(item => item.responses.map(({ response }) => response))
// );
// console.log(result);


// const array1 = [
//   {
//     name: 'data1',
//     amount: 10,
//     serviceId: 'aa',
//     result: 'SUCCESS',
//   },
//   {
//     name: 'data2',
//     amount: 9,
//     result: 'FAIL',
//   },
//   {
//     name: 'data3',
//     amount: 15,
//     serviceId: 'cc',
//     result: 'SUCCESS',
//   },
//   {
//     name: 'data3',
//     amount: 15,
//     serviceId: 'dd',
//     result: 'FAIL',
//   },
// ];
// // First group the items by name
// const byName = array1.reduce((ob, item) => {
//   if (!(item.name in ob)) ob[item.name] = [];
//   ob[item.name].push({
//     amount: item.amount,
//     result: item.result,
//   });
//   return ob;
// }, {});
// // Then compute the total amount in each group and find if there is any FAIL in a group
// const sumByproperty = Object.keys(byName).map(name => {
//   // This is a way to iterate through the groups
//   // Sum the amount in all elements of a group
//   const amount = byName[name].reduce((sum, item) => sum + item.amount, 0);
//   // Find if there is any FAIL in a group
//   const result = byName[name]
//     .map(item => item.result) // Get an array with only the result string
//     .includes('FAIL')
//     ? 'FAIL'
//     : 'SUCCESS'; // Evaluate if the array includes FAIL
//   return {
//     name,
//     amount,
//     result,
//   };
// });

// console.log(byName);
// console.log(sumByproperty);



// let arr = [{'id': "1"}, {'id': "8"}]
// let ids =["1","2","3","4"];
// var includes = arr.filter(f => ids.includes(f.id))
// console.log(includes) //1

// function groupBy(array, fn) {
//   return array.reduce((acc, current) => {
//     const groupName = typeof fn === 'string' ? current[fn] : fn(current);
//     (acc[groupName] = acc[groupName] || []).push(current);
//     return acc;
//   }, {});
// }
// const datav = [
//   {
//     desc: 'a',
//     menu: 1,
//   },
//   {
//     desc: 'b',
//     menu: 2,
//   },
//   {
//     desc: 'c',
//     menu: 1,
//   },
//   {
//     desc: 'd',
//     menu: 3,
//   },
//   {
//     desc: 'e',
//     menu: 3,
//   },
//   {
//     desc: 'f',
//     menu: 2,
//   },
//   {
//     desc: 'g',
//     menu: 1,
//   },
//   {
//     desc: 'g',
//     menu: 1,
//   },
//   {
//     desc: 'g',
//     menu: 4,
//   },
//   {
//     desc: 'g',
//     menu: 4,
//   },
//   {
//     desc: 'g',
//     menu: 4,
//   },
// ];
// const groupMenu = groupBy(datav, item => item.menu);
// console.log(groupMenu);



// const ary = [
//   '2020-08-20',
//   '2020-08-20',
//   '2020-08-21',
//   '2020-08-24',
//   '2020-08-25',
//   '2020-08-25',
//   '2020-08-25',
// ];
// const va = [];
// ary.forEach(d => {
//   const index = va.findIndex(r => r.date === d);
//   if (index === -1) {
//     va.push({
//       date: d,
//       count: 1,
//     });
//   } else {
//     va[index].count++;
//   }
// });
// console.log(va);

// const arr = [
//   { name: 'val', change: 100, price: 50 },
//   { name: 'test', change: 50, price: 10 },
// ];
// const res = arr.map(({ change, ...rest }) => ({ ...rest, change: 0 }));
// console.log(res);

// const propertyName = ['id', 'createId', 'sentId'];
// const value = [
//     ['1', '2', '3'],
//     ['3', '4', '5'],
//     ['6', '7', '8'],
// ];
// const dataObjs = value.map(a =>
//     Object.fromEntries(a.map((e, i) => [propertyName[i], e]))
// );
// console.log(dataObjs);


// const sortedData = [
//   {
//     val1: 'abc',
//     val2: 1,
//     val3: 2,
//   },
//   {
//     val1: 'def',
//     val2: 3,
//     val3: 4,
//   },
//   {
//     val1: 'ghe',
//     val2: 5,
//     val3: 6,
//   },
// ];
// const obj = sortedData.reduce(
//   (acc, { val1, val2, val3 }) =>
//     (acc[val1] = {
//       val2,
//       val3,
//     }) && acc,
//   {}
// );
// console.log(obj);

// let str = 'abc cde ght',
//   old_Words = ['abc', 'cde'],
//   new_Words = ['tt', 'yy'],
//   newstr = str;
// for (let i = 0; i < old_Words.length; i++) {
//   newstr = newstr.replace(old_Words[i], new_Words[i]);
// }
// console.log(newstr);


// let cars = [
//   {
//     color: 'purple',
//     type: 'minivan',
//     capacity: 7,
//   },
//   {
//     color: 'purple',
//     type: 'ferrari',
//     capacity: 3,
//   },
//   {
//     color: 'green',
//     type: 'bike',
//     capacity: 1,
//   },
// ];
// const colors = cars.map(car => car.color);
// const unique = [...new Set(colors)];

// console.log('unique', unique);

// const string = 'Option 1|false|Option 2|false|Option 3|false|Option 4|true',
//   result = [];
// for (let i = 0, a = string.split('|'); i < a.length; i += 2) {
//   const option = a[i],
//     value = JSON.parse(a[i + 1]);
//   result.push({ option, value });
// }
// console.log(result);

// const customers = [
//   {
//     customer_name: 'Negan',
//     customer_age: 45,
//     customer_weapon: 'Bat',
//     customer_email: 'negan@sanctuary.com',
//     customer_city: 'Washington',
//   },
//   {
//     customer_name: 'Daryl',
//     customer_age: 41,
//     customer_weapon: 'Crossbow',
//     customer_email: 'daryl.dixon@kickass.com',
//     customer_city: 'Atlanta',
//   },
//   {
//     customer_name: 'Rick',
//     customer_age: 45,
//     customer_weapon: 'Magnum 357',
//     customer_email: 'rick@alexandria.com',
//     customer_city: 'King County',
//   },
// ];
// const newKeys = ['firstName', 'age', 'weapon', 'email', 'city'];
// let result = customers.map(obj =>
//   Object.values(obj).reduce((acc, cur, i) => {
//     acc[newKeys[i]] = cur;
//     return acc;
//   }, {})
// );
// console.log(result);

// var a = [1, 2, 3], b = [101, 2, 1, 10];
// var c = a.concat(b);
// console.log('c', c);
// var d = c.filter((item, pos) => c.indexOf(item) === pos);
// console.log('d', d);

// const e = [...new Set([...a ,...b])]; //   => remove duplication
// console.log('e', e);

// function display(name = 'David', age = 35, location = 'NY') {
//   console.log(name, age, location);
// }
// display('David', 35); // David 35 NY
// display('David', 35, undefined); // David 35 NY

// display('David', 35, undefined); // David 35 NY
// display('David', 35, null); // David 35 null

// let i = 10;
// {
//   let i = 20;
//   console.log('inside:', i); // inside: 20
//   i = 30;
//   console.log('i again:', i); // i again: 30
// }
// console.log('outside:', i); // outside: 10

// ES6 Code
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log('outside:', i); // Uncaught ReferenceError: i is not defined

// ES5 Code
// for(var i = 0; i < 10; i++){
//  console.log(i);
// }
// console.log('outside:', i); // 10

// let test = "Test";
// test[0] = "R";
// console.log(test);

// let numberTen = 10;
// numberTen = "Ten";
// console.log(numberTen);

// https://dev.to/aravindan07/introduction-to-javascript-universe-3h
// Primitive values are immutable
// Primitive values are immutable(cannot be changed).
// Variables are not values. variables point to values and thus we can control where we need to point the variable.
// There are special numbers in Javascript which are Infinity,-Infinity, NaN, and -0.

// var fruits = ["banana", "apple", "orange"];
// var fruitsObj = { ...fruits };
// console.log(fruitsObj);
// Returns : {0: "banana", 1: "apple", 2: "orange"}

// var newArray = new Array(5).fill("Hi");
// console.log(newArray);
// Returns: ["Hi", "Hi", "Hi", "Hi", "Hi"]

// const colors = ["red", "pink", "yellow", "black", "blue"];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
// console.log(randomColor);
// Returns a random color from the "colors" array.

// var numOne = [0, 2, 4, 6, 8, 8];
// var numTwo = [1, 2, 3, 4, 5, 6];
// var duplicateValues = [...new Set(numOne)].filter(item => numTwo.includes(item));
// console.log(duplicateValues);
// Returns [2, 4, 6]

// var entries = [1, 2, 3, 4, 5, 6, 7];
// console.log(entries.length); // 7
// entries.length = 4;
// console.log(entries.length); // 4
// console.log(entries); // [1, 2, 3, 4]

// const fixToFixed = (value = 0, holdLen = 2) => {

//   if (!Number.isFinite(+value) || (!value && value !== 0)) return '--';

//   let valueStr = `${value}`

//   let dotIndex = valueStr.indexOf('.');
//   if (dotIndex === -1) {
//     let integerStr = '.';
//     for (let i = 0; i < holdLen; i++) {
//       integerStr = integerStr + '0';
//     }
//     return valueStr + integerStr;
//   }

//   const dotBefore = valueStr.split('.')[0];
//   let dotAfter = valueStr.split('.')[1];
//   let result = '';
//   if (dotAfter.length === holdLen) {
//     result = valueStr;
//   } else if (dotAfter.length < holdLen) {
//     const forLength = holdLen - dotAfter.length;
//     for (let i = 0; i < forLength; i++) {
//       dotAfter = dotAfter + '0';
//     }
//     result = dotBefore + '.' + dotAfter;
//   } else {
//     const digit = valueStr.substr(dotIndex + holdLen + 1, 1);
//     if (digit >= 5) {
//       const temp = Math.pow(10, 0 - holdLen);
//       valueStr =
//         Number.parseFloat(valueStr) > 0
//           ? Number.parseFloat(valueStr) + temp
//           : Number.parseFloat(valueStr) - temp;
//     }
//     result = `${valueStr}`.substr(0, dotIndex + holdLen + 1);
//   }
//   return result;
// };

// const numberFormatThousands = (number = 0, decimals = 2) => {

//   if (!Number.isFinite(+number) || (!number && number !== 0)) return '--';
//   const numberFix = `${number}`.replace(/[^0-9+-Ee.]/g, '');
//   const num = !Number.isFinite(+numberFix) ? 0 : +numberFix;
//   const prec = !Number.isFinite(+decimals) ? 0 : Math.abs(decimals);
//   const sep = ',';
//   const dec = '.';
//   const str = (prec ? fixToFixed(num, prec) : `${Math.round(num)}`).split('.');
//   const re = /(-?\d+)(\d{3})/;
//   while (re.test(str[0])) {
//     str[0] = str[0].replace(re, '$1' + sep + '$2');
//   }
//   if ((str[1] || '').length < prec) {
//     str[1] = str[1] || '';
//     str[1] += new Array(prec + 1 - str[1].length).join('0');
//   }
//   return str.join(dec);
// };

// const twoSum1 = function(nums, target) {
//   if ( !Array.isArray(nums) || Object.prototype.toString.call(target) !== '[object Number]' ) return;

//   let i, j, len = nums.length;

//   for (i = 0; i < len; i++) {
//     for (j = i + 1; j < len; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

// const result1 = twoSum1([2, 3, 7, 6], 9);
// console.log(result1);

// const twoSum3 = function(nums, target) {
//   if ( !Array.isArray(nums) || Object.prototype.toString.call(target) !== '[object Number]' ) return;

//   var arr = [],
//     i,
//     j,
//     len = nums.length;

//   for (i = 0; i < len; i++) {
//     j = arr[target - nums[i]];
//     if (j !== undefined) return [j, i];
//     arr[nums[i]] = i;
//   }
// };

// const result3 = twoSum3([2, 7, 8, 7], 9);

// console.log(result3);

// const twoSum2 = function(nums, target){
//   if ( !Array.isArray(nums) || Object.prototype.toString.call(target) !== "[object Number]" ) return;

//   var arr = [],
//       i,
//       j,
//       len = nums.length;

//   for ( i = 0; i < len; i ++ ){
//     arr[nums[i]] = i;
//   }

//   for ( i = 0; i < len; i ++ ){
//     j = arr[ target - nums[i] ];
//     if ( j !== undefined && i !== j ) return [ i, j ];
//   }
// }

// const result = twoSum2([2, 7, 8], 9);

// console.log(result);

function lastItem(list) {
  if (Array.isArray(list)) {
    return list.slice(-1)[0];
  }

  if (list instanceof Set) {
    return Array.from(list).slice(-1)[0];
  }

  if (list instanceof Map) {
    return Array.from(list.values()).slice(-1)[0];
  }
}

function randomNumber(max = 1, min = 0) {
  if (min > max) {
    return max;
  }
  return Math.floor(Math.random() * Math.floor(max - min + 1) + min);
}

const asyncSequentializer = (() => {
  const toPromise = x => {
    if (x instanceof Promise) {
      return x;
    }
    if (typeof x === 'function') {
      return (async () => await x())();
    }
    return Promise.resolve(x);
  };

  return list => {
    const result = [];

    return list
      .reduce((lastPromise, currentPromise) => {
        return lastPromise.then(res => {
          result.push(res);
          return toPromise(currentPromise);
        });
      }, toPromise(list.shift()))
      .then(res => Promise.resolve([...result, res]));
  };
})();

function isEmpty(x) {
  if (Array.isArray(x) || typeof x === 'string' || x instanceof String) {
    return x.length === 0;
  }

  if (x instanceof Map || x instanceof Set) {
    return x.size === 0;
  }

  if ({}.toString.call(x) === '[Object Object') {
    return Object.keys(x).length === 0;
  }

  return false;
}

// const members = [["name", "apple"], ["type", "fruit"]];

// const obj = Object.create(null);
// members.forEach(([key, value]) => obj[key] = value);

// console.log(obj); // { name: "apple", type: "fruit" }

// function groupBy(arr, func) {
//   return arr.reduce((acc, item) => {
//     const key = func(item);
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(item);
//     return acc;
//   }, Object.create(null));
// }

// const basket = [
//   { name: 'apple', type: 'fruit' },
//   { name: 'broccoli', type: 'vegetable' },
//   { name: 'banana', type: 'fruit' },
// ];

// const grouped = groupBy(basket, food => food.type);
// console.log(grouped);

// function groupBy(arr, func){
//   let grouped = Object.create(null);

//   arr.forEach((item) => {
//     const key = func(item);
//     if (!grouped[key]) {
//       grouped[key] = [];
//     }
//     grouped[key].push(item);
//   });

//   return grouped;
// }
// window.addEventListener('load', function() {
//   console.log('The page is visible: ', document.visibilityState);
// });
