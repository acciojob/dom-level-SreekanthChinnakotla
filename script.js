
const targetElement = document.getElementById("level");

// Initialize a counter for the DOM level
let domLevel = 0;

// Traverse up the DOM tree to count the levels
let currentElement = targetElement;
while (currentElement) {
  domLevel++;
  currentElement = currentElement.parentElement; // Move to the parent element
}


alert(`The level of the element is: ${domLevel}`);
