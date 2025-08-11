/*
array.forEach(
    callback(
        currentValue, index
    )
)
*/

// For Each Loop
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(function(number){
    console.log(number)
})

// A bit of refresher, show me how you would do 
// this with normal for loop

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

numbers.forEach(function(number, index, array) {
	console.log(`Number ${number} is at index ${index}`);
});

// This is an ES6 format (you probably won't need to know)
numbers.forEach(number => {
    console.log(number)
})

// Map Concept
// It does something with the original array without 
// changing the original array, and assigns it to a 
// new variable

// SYNTAX
// const newArray = originalArray.map(callbackFunction);

// const doubledNumbers = numbers.map(function(number){
//     return number * 2;
// })
const doubledNumbers = numbers.map(number => { return number * 2; })

console.log(doubledNumbers) // Output: [2, 4, 6, 8, 10]
console.log(numbers) // Output: [1, 2, 3, 4, 5]

// Note that .map() does not modify the original array.