function getLetterGrade(score){
    if(score >= 90 && score <= 100){
        return "A"
    }else if (score >= 80 && score < 90){
        return "B"
    }else if (score >= 70 && score < 80){
        return "C"
    }else if (score >= 60 && score < 70){
        return "D"
    }else if (score < 60){
        return "F"
    }
}

console.log("Score 95: " + getLetterGrade(95)); // A
console.log("Score 85: " + getLetterGrade(85)); // B
console.log("Score 75: " + getLetterGrade(75)); // C
console.log("Score 65: " + getLetterGrade(65)); // D
console.log("Score 55: " + getLetterGrade(55)); // F

function calculateTax(income, taxStatus){
    if(taxStatus == "single"){
        if(income <= 30000)
            return income * 15 / 100
        else
            return income * 20 / 100
    } else if(taxStatus == "married"){
        if(income <= 50000)
            return income * 10 / 100
        else
            return income * 15 / 100
    }
}

// Call calculateTax with four different inputs
console.log("Tax for single person earning 25000: " + calculateTax(25000, "single")); // 3750
console.log("Tax for single person earning 50000: " + calculateTax(50000, "single")); // 10000
console.log("Tax for married person earning 40000: " + calculateTax(40000, "married")); // 4000
console.log("Tax for married person earning 60000: " + calculateTax(60000, "married")); // 9000