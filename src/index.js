

function CopyToClipboard(containerId) {
  if (window.getSelection) {
    if (window.getSelection().empty) {
      // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {
    // IE?
    document.selection.empty();
  }
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerId));
    range.select().createTextRange();
    document.execCommand('copy');
  } else if (window.getSelection) {
    var ranges = document.createRange();
    range.selectNode(document.getElementById(containerId));
    window.getSelection().addRange(ranges);
    document.execCommand('copy');
  }
}



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
