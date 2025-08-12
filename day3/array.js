const numbers = [1, 3, 5, 7, 9];

const firstEven = numbers.find(function(number) {
    return number % 2 === 0;
});

const firstOdd = numbers.find(function(number){
    return number % 2 === 1;
})

// % (Modulus) is to find the remainder after dividing.
// console.log(12 / 6)
// console.log(12 % 6)
// console.log(12 / 3)
// console.log(12 % 3)

// console.log(4553 % 2) // 1
// console.log(421576 % 2) // 0

// console.log(17 % 6) // 5

const firstEvenIndex = numbers.findIndex(function(number) {
    return number % 2 === 0;
});

// const firstOddIndex = numbers.findIndex(function(number) {
//     return number % 2 === 1;
// });

console.log(firstOdd); // Output: 6

//Filter Function

//const newArray = originalArray.filter(callbackFunction);

const numbers2 = [1, 2, 3, 4, 5]
const evenNumbers = numbers2.filter(function(number){
    return number % 2 === 0;
})
const oddNumbers = numbers2.filter(function(number){
    return number % 2 === 1 && number < 5;
})

console.log(oddNumbers)

// .some()

const fruits = ["apple", "banana", "orange", "pear"];

const hasBanana = fruits.some(function(fruit) {
    return fruit === "banana";
});

console.log(hasBanana); // Output: true

const ar1 = [1, 2, 3]
const ar2 = [4, 5, 6]
const ar3 = [7, 8, 9]
const ar4 = [10, 11, 12]
const newArr = ar1.concat(ar2, ar3, ar4)

const newArray = [...ar1, ...ar2, ...ar3, ...ar4]

console.log(newArray)

const myArray = ['apple', 'banana', 'cherry'];
const myString = myArray.toString();
console.log(myString); // Output: "apple,banana,cherry"

const myArray2 = ['apple', 'banana', 'cherry'];
const myString2 = myArray.join('-');
console.log(myString2); // Output: "apple-banana-cherry"