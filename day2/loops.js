for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Create your own for loop, that starts from 5 to 20

//Create a for loop within a for loop, to count your push-ups sets and reps.
/*
    Example output
    Set 1 Rep 1: Done
    Set 1 Rep 2: Done
    Set 1 Rep 3: Done
    Set 1 Rep 4: Done
    Set 1 Rep 5: Done

    Set 2 Rep 1: Done
    Set 2 Rep 2: Done
    Set 2 Rep 3: Done
    Set 2 Rep 4: Done
    Set 2 Rep 5: Done

    Set 3 Rep 1: Done
    Set 3 Rep 2: Done
    Set 3 Rep 3: Done
    Set 3 Rep 4: Done
    Set 3 Rep 5: Done
*/

for(let sets = 1; sets <= 3; sets++){
    for(let reps = 1; reps <= 5; reps++){
        if(reps == 3){
            console.log("Set " + sets + " Rep " + reps + ": Done")
        }
    }
}
// Only console log when the rep count is 3 for each set.

const fruits = ['apple', 'banana', 'orange', 'watermelon'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For Loop.

// While Loop.
let j = 1;
while(j <= 10){
    console.log("While J: " + j)
    j++
}
//Small Exercise
//Do the Sets and Reps thing, but this time with while loop.

let sets = 1
while(sets <= 3){
    let reps = 1
    while(reps <= 5){
        console.log("Set " + sets + " Rep " + reps + ": Done")
        reps++
    }
    sets++
}

// let myname = prompt("Enter your name")
// console.log(myname)

let input;

// while (input !== 'yes' && input !== 'no') {
//     input = prompt('Please enter "yes" or "no":');
// }

for(let test = 1; input !== 'yes' && input !== 'no'; test++){
    input = prompt('Please enter "yes" or "no":');
    console.log(test + " tries")
}

console.log('User entered:', input);