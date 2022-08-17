//Question 1

function receivingFunction(argument) {
  if (typeof argument === "function") {
    argument();
  } else {
    console.log("The argument is not a function");
  }
}

const callbackFunction = function () {
  console.log("I am a callback function");
};

receivingFunction(callbackFunction);

//Question 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function (prize, index) {
  console.log(`Prize ${index + 1}: ${prize}`);
});

//Question 3

//My solution, probaly not a good solution:
//let milliseconds = 5000;
//setTimeout(function () {
//  console.log("I waited 5 seconds before executing");
//}, milliseconds);

//OR

const seconds = 5;

function logMessage() {
  console.log(`I waited ${seconds} seconds before executing`);
}

setTimeout(logMessage, seconds * 1000);

//Question 4

const interval = 500;
let counter = 0;
const limit = 4;

function logNumber() {
  counter++;

  console.log(counter);

  if (counter === limit) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(logNumber, interval);
