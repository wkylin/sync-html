
let test = "Test";
test[0] = "R";
console.log(test);

let numberTen = 10;
numberTen = "Ten";
console.log(numberTen);

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

  return (list) => {
    const result = [];

    return list.reduce((lastPromise, currentPromise) => {
      return lastPromise.then(res => {
        result.push(res);
        return toPromise(currentPromise);
      });
    }, toPromise(list.shift()))
    .then(res => Promise.resolve([...result, res]));
  }
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
