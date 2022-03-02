

// FUNCTIONS EXERCISE

// 1. Write a function that reverses a string

 function reverseString(word) {
    return word.split("").reverse().join("")
}

console.log(reverseString("banana"))


// 2. Write a function that sorts a string in alphabetical order
function alpha(str) {
    return str.split("").sort().join("")
}

console.log(alpha("banana"))
console.log(alpha("apple"))

// 3. Write a function that loops over an array or Strings and capitalises each one before returning the array 

const capitaliseName = function (name) {
    const names = name.split(" ")
    const namesUpper = []

    for(const n of names) {
        namesUpper.push((n[0]).toUpperCase() + n.slice(1))
    }
    console.log(namesUpper.join(" "))
}

capitaliseName("jessica ann smith davis")

// 4. Write a function that console logs the data type of the aruments

const dataType = function (argument) {
     console.log(typeof argument)
}

dataType("clare")
dataType(43)
dataType(true)
dataType()

// 5. Write a function that returns the length of the longest word in a sentence

function findLongestWord(sentence) {
    const words = sentence.split(" ") // ['the', 'lazy', 'brown', 'fox']
    let longestWord = words[0] // word at position [0] is 'the' which is 3 characters in length

    for (i=0; i<words.length; i++){

        // if the next word in the loop is longer than my current word
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
        return longestWord
}

console.log(findLongestWord("the lazy brown fox jumps over the fence hihudjdbvjfdbvf"))

//HOMEWORK

// program for a simple calculator

// pick the operator input
const operator = prompt('Enter operator ( either +, -, *, /, sqrt, power): ');

// getting the user input
const userInputNumber1 = parseFloat(prompt('Enter first number: '));
const userInputNumber2 = parseFloat(prompt('Enter second number: '));

let result;

function addition (number1, number2) {
    result = number1 + number2;
    console.log(alert(`Result is ${result}`));
};

function subtraction (number1, number2) {
    result = number1 - number2;
    console.log(alert(`Result is ${result}`));
};

function multiplication (number1, number2) {
    result = number1 * number2;
    console.log(alert(`Result is ${result}`)); 
};

function division (number1, number2) {
    result = number1 / number2;
    console.log(alert(`Result is ${result}`))
};

function squareRoot (number1) {
    result = (Math.sqrt(number1))
    console.log(alert(`Result is ${result}`))
};

function powerOf (number1, number2) {
    result = (number1 ** number2)
    console.log(alert(`Result is ${result}`))
};

// using if...else if... else
if (operator === '+') {
    addition(userInputNumber1, userInputNumber2);
}
else if (operator === '-') {
    subtraction(userInputNumber1, userInputNumber2);
}
else if (operator === '*') {
    multiplication(userInputNumber1, userInputNumber2);
}
else if (operator === '/') {
    division(userInputNumber1, userInputNumber2);
} 
else if (operator === 'sqrt') {
    squareRoot(userInputNumber1);
}
else if (operator === 'power'){
    powerOf(userInputNumber1, userInputNumber2);
}
else {
    console.log(prompt('Please try again'))
}

// display the result in console
console.log(`${userInputNumber1} ${operator} ${userInputNumber2} = ${result}`);
