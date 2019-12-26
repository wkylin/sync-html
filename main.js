function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
console.log(theCityThatAlwaysSleeps());
function f(x) {
    // let x = 100; // error: interferes with parameter declaration
}
function g() {
    var x = 100;
    // var x = 100; // error: can't have both declarations of 'x'
}
// 并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明。
// setTimeout在若干毫秒后执行一个函数，并且是在for循环结束后。
// 在一个嵌套作用域里引入一个新名字的行为称做屏蔽。
// 当let声明出现在循环体里时拥有完全不同的行为。 不仅是在循环里引入了一个新的变量环境，而是针对 每次迭代都会创建这样一个新作用域。
// for (var i = 0; i < 10; i++) {
//   // capture the current state of 'i'
//   // by invoking a function with its current value
//   (function(i) {
//     setTimeout(function() { console.log(i); }, 100 * i);
//   })(i);
// }
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatrix([[1, 2], [22, 33]]));
var n = null;
var u = undefined;
var list = [1, 2, 3];
// console.log(`list==>>${list}`);
// console.log('n==>>', n);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
// console.log(c);
// console.log(colorName);
