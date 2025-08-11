var globalVar = "I'm a global variable";

function exampleFunction() {
  var functionVar = "I'm a function-scoped variable";
  console.log(globalVar); // "I'm a global variable"

  if (true) {
    let blockVar = "I'm a block-scoped variable";
    console.log(functionVar); // "I'm a function-scoped variable"
  }

//   console.log(blockVar); // ReferenceError: blockVar is not defined
}

function printFunctionVar(){
    console.log(functionVar)
}

exampleFunction();
printFunctionVar();
console.log(functionVar); // ReferenceError: functionVar is not defined