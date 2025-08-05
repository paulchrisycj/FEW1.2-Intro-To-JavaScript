function sayHello(name, age) {
  return "Hello " + name + " and I am " + age + " years old";
//   console.log("Hello " + name + " and I am " + age + " years old");
}

let helloStatement = sayHello("Paul", 50)
// helloStatement = helloStatement + " and I live in Penang"
helloStatement += " and I live in Penang"
console.log(helloStatement)

function add(n1, n2) {
  return n1 + n2;
}
console.log(add(5, 7)); //12
console.log(add(8, 9)); //17

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius(90)); //32.2222

// Operators
// a. Assignment Operators

// b. Comparison Operators
/*

==
!=

===
!==

*/

console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(5 == "25"); // false
console.log(1 == true); // true
console.log(0 == false); // true

console.log("1" === 1); // false
console.log(5 === 2); // false
console.log(0 === false); // false

console.log("==========================")
console.log(4 != 5) // true
console.log(3 != 3) // false
console.log(3 != "3") // false
console.log(3 !== "3") // true

// Comparison Operator MORE
console.log("==========================")
console.log("Comparison Operator MORE")
console.log(5 > 3) // true
console.log(6 < 7) // true
console.log(10 < 5) // false
console.log(9 > 9) // false
console.log(9 >= 9) // true
console.log(4 <= 4) // true
// console.log(3 !>= 2) // IMPOSSIBRU
console.log(!(3 >= 2)) // false

// Logical Operators
console.log("==========================")
console.log("Logical Operators")
console.log(5 > 2 && 2 < 5) // true
console.log(5 > 2 && 4 < 9) // true
console.log(5 > 7 && 4 < 9) // false
console.log(5 > 7 && 15 < 9) // false
console.log(5 > 7 || 4 < 9) // true
console.log(5 > 7 || 15 < 9) // false
console.log(!(5 > 7 || 15 < 9)) // true