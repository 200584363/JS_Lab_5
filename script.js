// Code by Utsav Patel 
// JavaScript Week05 Function Lab 

// Challenge 1: getCelsius Function
const getCelsius = fahrenheit => ((fahrenheit - 32) * 5 / 9).toFixed(2);

// Test the getCelsius function
console.log(getCelsius(32)); // Output: 0
console.log(`The temperature is ${getCelsius(32)} \xB0C`);
// Output: The temperature is 0 °C


// Challenge 2: minMax Function
const minMax = arr => ({
  min: Math.min(...arr),
  max: Math.max(...arr)
});

// Test the minMax function
console.log(minMax([1, 2, 3, 4, 5]));
// Output: { min: 1, max: 5 }


// Challenge 3: IIFE for Rectangle Area
(function(length, width) {
  console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`);
})(10, 5);  // Passes length and width into the IIFE
// Output: The area of a rectangle with a length of 10 and a width of 5 is 50.
