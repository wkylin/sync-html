const twoSum1 = function(nums, target) {
  if ( !Array.isArray(nums) || Object.prototype.toString.call(target) !== '[object Number]' ) return;

  let i, j, len = nums.length;

  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

const result1 = twoSum1([2, 3, 7, 6], 9);
console.log(result1);


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
