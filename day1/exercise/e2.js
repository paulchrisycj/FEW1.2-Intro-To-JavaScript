function calculateArea(length, width){
    return length * width
}

console.log(calculateArea(5, 5))
console.log(calculateArea(5, 10))
console.log(calculateArea(10, 10))

function checkTemp(temp){
    if(temp > 30){
        return "Hot"
    }else{
        return "Cold"
    }
}

console.log(checkTemp(35))
console.log(checkTemp(20))