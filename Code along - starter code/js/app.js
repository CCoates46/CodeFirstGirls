/* eslint-disable no-unused-vars */


// Your code goes here

// Exercise: FUNCTIONS
/*
for (i = 0; i < 5; i++) {
    console.log('Counting up! i is ' + i)
}

for (i = 5; i > 0; i--) {
    console.log('Counting down! i is ' + i)
}

function myName () {
    const answer = prompt('What is your name?')
    return answer
}

const name1 = myName()
console.log(`You're name is: ${name1}`)
*/

function movieDetails (title, released) {
   return title + " was released on " + released
}

const movie1 = movieDetails('Batman', 1998)
console.log(movie1)


// Exercise: ARGUMENTS

// Passing Variables as arguments when we invoke the function

// Exercise: CONTROL FLOW

//Write another function with control flow called shoppingCart which decides whether or not you can
//afford a new item of clothing
//It should take 3 arguments: item, cost and balance and return whether or not you can afford it based
//on your balance

function shoppingCart (item, cost, balance){
    if(cost < balance) {
        return `Yes you can buy ${item}`
    } else {
        return `No can't you buy ${item}`
    }
}

console.log(shoppingCart('Dress', 150, 300))
console.log(shoppingCart('Jeans', 85, 15))

// ADDING LOGIC(code available on slides)

// Exercise: FUNCTION LOGIC


// SCOPE (code available on slides)
