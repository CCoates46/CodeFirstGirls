document.addEventListener('DOMContentLoaded', function() {
  // Your code here...

  // Create a User object with the following properties:
  // - firstName = string
  // - lastName = string
  // - age = integer
  // - occupation = string
  // - address = object, with number, street and city as properties
  // - friends = array
  // - hasCar = boolean
  var user = {
    firstName: 'Clare',
    lastName: 'Coates',
    age: 46,
    occupation: 'Quality Engineer',
    address: {
      number: 23,
      street: 'Azalea Drive',
      city: 'Leicestershire',
    },
    friends: ['Catherine', 'Liz', 'Amy'],
    hasCar: true,
  }
  // Using the existing HTML elements, assign each element its respective property from your new object
  // The first one has been done for you

  // BASIC
  // name
  var nameElement = document.getElementById("name");
  nameElement.innerText = `${user.firstName} ${user.lastName}`;
  
  // age
  var ageElement = document.getElementById("age");
  ageElement.innerText = `${user.age}`
   
  // occupation
  var occupationElement = document.getElementById("occupation");
  occupationElement.innerText = `${user.occupation}`
  // hasCar
  var hasCarElement = document.getElementById("hasCar");
  hasCarElement.innerText = `${user.hasCar}`
  // INTERMEDIATE
  // address number
  var adrsNumberElement = document.getElementById("adrsNumber");
  adrsNumberElement.innerText = `${user.address.number}`
  // address street
  var adrsStreetElement = document.getElementById("adrsStreet");
  adrsStreetElement.innerText = `${user.address.street}`
  // address city
  var adrsCityElement = document.getElementById("adrsCity");
  adrsCityElement.innerText = `${user.address.city}`
  // ADVANCED
  // loop through the friends and append each one onto the correct element

  var friendsElement = document.getElementById("friends")

  for (i=0; i<user.friends.length; i++) {
    var friendsListItem = document.createElement('li')
    //give my list item a text with my friends name
    friendsListItem.innerText= `${user.friends[i]}`
    //append my new element in my unordered list
    friendsElement.appendChild(friendsListItem)
  }

})