// elements
const screenEl = document.querySelector('.screen');
const clearEl = document.querySelector('.clear');
const polarityEl = document.querySelector('.polarity');
const moduloEl = document.querySelector('.modulo');
const divideEl = document.querySelector('.divide');
const multiplyEl = document.querySelector('.multiply');
const subtractEl = document.querySelector('.subtract');
const additionEl = document.querySelector('.add');
const periodEl = document.querySelector('.period');
const equalsEl = document.querySelector('.equals');
const zeroEl = document.querySelector('.zero');
const oneEl = document.querySelector('.one');
const twoEl = document.querySelector('.two');
const threeEl = document.querySelector('.three');
const fourEl = document.querySelector('.four');
const fiveEl = document.querySelector('.five');
const sixEl = document.querySelector('.six');
const sevenEl = document.querySelector('.seven');
const eightEl = document.querySelector('.eight');
const nineEl = document.querySelector('.nine');

let digitOne = 0;
let digitTwo = 0;
let operator = null;
let result = 0;

// Functions
// Function to clear screen
// function to add digits to the number
// function to calculate the product

// Event Listeners
clearEl.addEventListener('click', function (e) {
	resetcalculator();
});
polarityEl.addEventListener('click', function (e) {
	number = screenEl.value;
	screenEl.textContent = number * -1;
});
moduloEl.addEventListener('click', function(e) {
	operator = "%";
})
divideEl.addEventListener('click', function(e) {
	operator = "/"
})