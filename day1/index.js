// This is a Hello World console log
console.log("Hello World")

/*
This is a multi-line comment
I can write
comments
in
multiple lines
*/

var x = 5
console.log(x)
var x = 20
console.log(x)

let y = 10;
// let y = 30; // This will cause an error because y has already been declared
y = 30;
console.log(y); // Output: 30

let myName = "Paul"
console.log(myName)

const a = 25;
// a = 30; // This will cause an error because a is a constant variable
console.log(a); // Output: 25

let someWords = "This is a String"
let stringOfNumbers = "100"
let actualNumber = 100
let actualNumber2 = 200

let combi = stringOfNumbers + actualNumber + actualNumber
console.log(combi)
let total = actualNumber + actualNumber2
console.log(total)

const student = {
  name: "John Doe",
  age: 42,
  address: "Penang",
  "0ff-231": "Hello World",
};
console.log(student.name); // Output: John Doe
console.log(student["age"]); // Output: 42

// Create an object with your name, age and address
// Add a hobby and console log in your object

// Now we learn about Arrays
const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Mango
console.log(fruits[2]); // Output: Banana
console.log(fruits[-1]);

// Two-dimensional Array
const heroes = [
  // 0         1           2
  ["ironman", "spiderman", "hulk"], // 0
  ["cabbage man", "robert cop", "kamen rider"], // 1
  ["thanos", "darkseid", "ultron"], // 2
];
console.log(heroes[0][1])
console.log(heroes[2][2])
console.log(heroes[1][0])

// Object + Array

const comicCharacters = {
    MCU: {
        heroes: ["Iron Man", "Captain America", "Thor"],
        villains: ["Thanos", "Ultron", "Dr Doom"]
    },
    DC: {
        heroes: ["Superman", "Batman", "Flash"],
        villains: ["Lex Luthor", "Joker", "Reverse Flash"]
    }
}

//Console log Captain America, Dr Doom, Lex Luthor and Flash