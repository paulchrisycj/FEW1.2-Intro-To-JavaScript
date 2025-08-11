const fruits = ['apple', 'mango'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Push - Adds one or more elements to the end of the array.
fruits.push("banana")
console.log(fruits) // Output: ['apple', 'mango', 'banana']

// Pop - Removes the last element from the array
fruits.pop()
console.log(fruits); // Output: ['apple', 'mango']

// Unshift - Adds one or more elements to the BEGINNING of an array
fruits.unshift("cempedak")
console.log(fruits); // Output: ['cempedak', 'apple', 'mango']

// Shift - Remove the first element from an array
fruits.shift()
console.log(fruits) // Output: ['apple', 'mango']

let vegetables = ['spinach', 'brocoli', 'cabbage', 'petai'] 
// vegetables.splice(2, 2)
console.log(vegetables) // Output: ['spinach', 'petai']

// Splice - Add, Remove or Replace elements in an array.
fruits.splice(1, 1) // Removes the second element.
console.log(fruits) // Output: ['apple']

//      Because the second parameter in the method is 0
fruits.splice(1, 0, 'durian') // Adds an element to the second position
console.log(fruits) // Output: ['apple', 'durian']

//      Because the second parameter in the method is 1
fruits.splice(1, 1, 'rambutan') // Replace the second element
console.log(fruits) // Output: ['apple', 'rambutan']

vegetables.splice(1, 2, 'Bok Choy', "Cucumber")
console.log(vegetables) // Output: ['spinach', 'Bok Choy', 'Bok Choy', 'petai']

// Slice - Returns a new array that contains a portion of the existing array.
const carBrands = ["Toyota", "Honda", "Nissan", "Subaru", "Mazda"]

const firstThreeCarBrands = carBrands.slice(0, 3) // First three elements
console.log(firstThreeCarBrands) // Output: ['Toyota', 'Honda', 'Nissan']

// Since the parameter is 3, it will start from 
// position 3 and get the rest of the elements
const lastTwo = carBrands.slice(3) // Last two elements
console.log(lastTwo) // Output: ['Subaru', 'Mazda']

const lastThree = carBrands.slice(2)
console.log(lastThree) // Output: ['Nissan', 'Subaru', 'Mazda']

const middleThree = carBrands.slice(1, 4)
console.log(middleThree) // Output: ['Honda', 'Nissan', 'Subaru']

const middleEndTwo = carBrands.slice(2, 4)
console.log(middleEndTwo) // Output: ['Nissan', 'Subaru']

//Basically, first parameter use computer position
//And second parameter, use layman position