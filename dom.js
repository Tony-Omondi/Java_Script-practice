const test = document.getElementById('test');

test.innerText = "My Name is Engenner Tony!";

//creating new elements;
const newItem = document.createElement("h1");
const headingTitle = document.createTextNode("This is heading title");

newItem.appendChild(headingTitle);

//adding new element to the DOM
const prinToDom = document.getElementById('newElement');
prinToDom.appendChild(newItem);

//ASSIGMENTS
// Create a new element that prints out yourfavourite dish, pets, colours

const favourite_dish = document.createElement('h1');
const dish_heading = document.createTextNode("This is my favourite");

newItem.appendChild(dish_heading);

const printToDom = document.getElementById('nito');
printToDom.appendChild(newItem);