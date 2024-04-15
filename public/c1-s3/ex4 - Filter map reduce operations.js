let numbers = [1, 2, 3, 4, 5];

// Write the function to filter out even numbers from an array
// You need to use the array.filter() function
function filterEvenNumbers(arr) {
  let even = arr.filter(number => number % 2 === 0);
  return even;
}
console.log(filterEvenNumbers(numbers));

// Function to map array elements to their squared values
// You need to use the array.map() function
function squareNumbers(arr) {
  let aquared = arr.map(number => number * number)
  return aquared;
}

// Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(arr) {
  let sum = arr.reduce((total,current) => total + current,0);
  return sum
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15
