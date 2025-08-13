// create a new paragraph element
let paragraph = document.createElement("p");
console.log(paragraph)

// set the text content of the paragraph
paragraph.textContent = "This is a new paragraph.";
console.log(paragraph)

// document.body.appendChild(paragraph)

// let newText = document.createTextNode("Hello World!");
// console.log(newText)
// document.body.append(newText)

let parent = document.getElementById("parent")
let sibling = document.getElementById("sibling")
parent.insertBefore(paragraph, sibling.nextSibling)

let para = document.getElementById("my-paragraph")
para.textContent = "Goodbye World"

// let div = document.getElementById("my-div");
// div.textContent = "<p>Goodbye World!</p>";

let image = document.getElementById("my-image")
image.src = "https://picsum.photos/id/101/600/700"

parent.remove()