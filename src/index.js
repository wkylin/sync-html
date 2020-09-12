
var userDetails = {
  name: 'Mayank Gupta',
  age: 30,
  designation: 'Developer',
  contactDetails: '+91-9711083089',
};

var newUserObject = Object.create(userDetails);

console.dir(newUserObject);




// window.addEventListener("load", function(){
//   console.log("The page is visible: ", document.visibilityState);
// });

// function eventCounter() {
//     var count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     }
// }
// var counter = eventCounter();

// console.log(counter());
