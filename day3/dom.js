let headings = document.getElementsByTagName("h1")
let headingWithID = document.getElementById("myHeading")

console.log(headings)
console.log(headingWithID)

headings[0].innerHTML = "I changed my heading text"

let divWithClass = document.getElementsByClassName("row")
let headingInsideDiv = divWithClass[0].getElementsByTagName("h1")

console.log(divWithClass)
console.log(headingInsideDiv[0])

let elementWithClass = document.querySelectorAll(".my-class")
console.log(elementWithClass)

// After you change the background color to blue
let myDiv = document.getElementsByClassName("my-div")[0]
myDiv.style.backgroundColor = "blue"
// Change the text color to white
myDiv.style.color = "white"

let myDivWithId = document.getElementById("my-div")
console.log(myDivWithId)
// Additional Challenge: Instead of using class selector,
// Try doing it with ID selector yourself.

let para = document.getElementById("my-paragraph")
para.classList.add("my-para")