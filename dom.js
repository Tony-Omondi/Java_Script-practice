const test = document.getElementById('test');
test.innerText = "My Name is Engineer Tony!";

// Creating new elements
const newItem = document.createElement("h1");
const headingTitle = document.createTextNode("This is heading title");

newItem.appendChild(headingTitle);

// Adding new element to the DOM
const printToDom1 = document.getElementById('newElement');
printToDom1.appendChild(newItem);

// ASSIGNMENTS
// Create a new element that prints out your favourite dish
const favouriteDish = document.createElement('h2');
const dishHeading = document.createTextNode("This is my favourite dish: Pilau");
favouriteDish.appendChild(dishHeading);

// Adding favourite dish to the DOM
const printToDom2 = document.getElementById('favouriteDish');
printToDom2.appendChild(favouriteDish);

// Create a new element that prints out your favourite pet
const favouritePet = document.createElement('h4');
const petName = document.createTextNode('My favourite pet is a Dog');
favouritePet.appendChild(petName);

// Adding favourite pet to the DOM
const printToDom3 = document.getElementById('favouritePet');
printToDom3.appendChild(favouritePet);

// Create a new element that prints out your favourite colours
const favouriteColors = document.createElement('h3');
const colorNames = document.createTextNode('My favourite colours are Blue and Green');
favouriteColors.appendChild(colorNames);

// Adding favourite colours to the DOM
const printToDom4 = document.getElementById('favouriteColors');
printToDom4.appendChild(favouriteColors);
