let array = [
  { rand: 1, id: 2 },
  { rand: 1, id: 1 },
  { rand: 1, id: 3 },
  { rand: 1, id: 3 },
];

let aRaa = array.sort((a, b) => a.id - b.id > 0 ? 1 : -1);

console.log('array', array);
console.log('aRaa', aRaa);
