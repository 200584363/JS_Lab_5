# JavaScript Lab-5 (Function Challenges)

This repository contains solutions to various JavaScript function challenges, including:

1. **Convert Fahrenheit to Celsius**  
2. **Find Minimum and Maximum Values in an Array**  
3. **Calculate the Area of a Rectangle (IIFE)**

## Challenge 1: Convert Fahrenheit to Celsius

The function `getCelsius(fahrenheit)` takes a temperature in Fahrenheit as an argument and returns the temperature in Celsius.

### Usage
```javascript
const getCelsius = fahrenheit => ((fahrenheit - 32) * 5 / 9).toFixed(2);

console.log(getCelsius(32)); // Output: 0
console.log(`The temperature is ${getCelsius(32)} \xB0C`); // Output: 0°C
```
### Challenge 2: Find Minimum and Maximum Values in an Array
```javascript
The function minMax(arr) takes an array of numbers as an argument and returns an object with the minimum and maximum values.
const minMax = arr => ({
  min: Math.min(...arr),
  max: Math.max(...arr)
});

console.log(minMax([1, 2, 3, 4, 5])); // Output: { min: 1, max: 5 }
```

### Challenge 3: Calculate the Area of a Rectangle (IIFE)
```javascript
An IIFE (Immediately Invoked Function Expression) calculates and logs the area of a rectangle based on its length and width.
(function(length, width) {
  console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`);
})(10, 5);  // Output: The area of a rectangle with a length of 10 and a width of 5 is 50.
```
