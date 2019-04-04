1 + 80 // 81
60 - 40 // 20
2 * 3.4 // 6.8
5.0 / 2.5 // 2
function add(x, y) {
  return x + y
}
function subtract(x, y) {
  return x - y
}
function multiply(x, y) {
  return x * y
}
function divide(x, y) {
  return x / y
}
var number = 10
function add5() {
  number += 5
}
function divideBy3() {
  number /= 3
}
 
divideBy3()
 
console.log(number) // 3.333333333335
 
add5()
 
console.log(number) // 8.333333333335
 
// reset number
number = 10
 
add5()
 
console.log(number) // 15
 
divideBy3()
 
console.log(number) // 5
