function sumArray(numbers) {
    let sum = 0
    numbers.forEach(element => {
        sum += element
    });
    return sum

}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Expected output: 55