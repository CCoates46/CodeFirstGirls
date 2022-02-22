// DATA TYPES

// DATA TYPES EXERCISES

// 4.1)Create a string variable called tvShow, assign the value Friends to it
let tvShow = 'Friends'
console.log(tvShow)

// 4.2)Create an integer variable called characters, assign the value 6 to it. Change the value of characters to 8.
let characters = 6
console.log(characters)
characters = 8
console.log(characters)


// 4.3)Create a float variable called rating, assign the value 7.5 to it.
let rating = 7.5
console.log(rating)

// 4.4)Create a boolean variable called hasShowFinished, assign the value true to it 
let hasShowFinished = true
console.log(hasShowFinished)

// 4.5)Using your own name variable, create a new string that either concatenates or interpolates to say “My name is <yourName> and I’m learning Javascript”
//concatenation
let firstName = 'Clare'
let fullName = "My name is  " + firstName + " and I\'m learning Javascript"
console.log(fullName)
//interpolation
let newString = (`My name is ${firstName} and I'm learning Javascript`)
console.log(newString)
// 4.6)Create a variable called sentence and use either concatenation to make a sentence using all your variables. Finally, display that sentence using console.log() or alert()
let sentence = (`My favourite show is ${tvShow}. This show is about ${characters} people who live together. I rate ${tvShow} ${rating}. It is ${hasShowFinished} that the show has finished. This is a review by ${firstName}`)
console.log(sentence)
//alert(sentence)

// IF/ELSE STATEMENTS 

// IF/ELSE EXERCISE
// 4.7 Using prompt() and alert(), write a program that asks the user if they would like to RSVP to a party. If the user says ‘yes’ display a welcome message. If the user says ‘no’ then display a different message 
/*
let rsvp = prompt("Would you like to go to the party? (yes or no)")

if (rsvp === "yes" || "Yes") {
    alert("Yay welcome to the party")
} else {
    alert("OH boo. Sorry you can't come")
}
*/



// ARRAY 

// ARRAY EXERCISE
// 4.8) Create an array called countries with two countries as strings
let countries = ['United Kingdom', 'France']
// console.log() countries to see if it worked
console.log(countries)
// Add a country to the end of the array
countries.push("Italy")
console.log(countries)
// Remove the first country from the array
countries.shift()
console.log(countries)
// Insert a country into the middle of the array
countries.splice(1, 0, "Germany")
console.log(countries)
// Finally, create a variable called countryList and join all the countries together, separated by commas
const countryList = countries.join(', ')

// console.log() the countryList variable 
console.log(countryList)



// FINAL CLASS EXERCISE
// Create a simple game that uses everything you have learned today. 
// For the purposes of demonstration, we’ll use a “Going to the shops” example

// The game will use alert() to display instructions and prompt() to get user feedback, which will be stored in variables
// (eg “Would you like to go the shops? (yes or no)” )

// Use with variables with if / else statements to try and ‘control’ the game
// (eg “if (spendingMoney > 30) { alert(‘Whoop! Big Spender!!’) } else { alert(‘Better be careful!!’) } ” )

// Further user input can be stored in arrays

const answer = prompt("would you like a drink from the coffee shop? (Yes or No)")

if (answer === "yes") {
    const  drinks = ["Espresso", "Americano", "Cappucino", "Latte", "Tea"]
    const whichDrink = prompt(`What would you like to buy? (${drinks.join(', ')}`)
    if (drinks.includes(whichDrink)) {
        alert(`Coming right up... one ${whichDrink}`)
    }
        else {
            alert('Sorry, we don\'t have that available')
             }
    } 
else {
        alert("sorry to hear that, see you next time.")
    }
