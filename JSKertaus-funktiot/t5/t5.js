/* Enhance the existing sortArray function to include an additional parameter that defines whether
the array should be sorted in ascending or descending order.
1. Create a function called sortArray that takes two parameters: numbers (an array of numbers)
and order (a string indicating the sorting order).
2. If the order parameter is set to "asc" (ascending), the function should sort the numbers array
in ascending order.
3. If the order parameter is set to "desc" (descending), the function should sort the numbers array
 in descending order.
4. Return a new array with the sorted numbers.
5. Test the function by passing different arrays and sorting orders.

Example Usage:

const numbers = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, "asc")); // Output: [1, 2, 5, 8, 9]
console.log(sortArray(numbers, "desc")); // Output: [9, 8, 5, 2, 1]
3p */
'use strict';
'use strict';
function sortArray(numbers, order) {
  let sortedNumbers = [];
  if (order === 'asc') {
    sortedNumbers = numbers.sort(function (a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    sortedNumbers = numbers.sort(function (a, b) {
      return b - a;
    });
  }
  return sortedNumbers;
}

// printing
const numbers = [11, 10, 9, 8, 7, 89, 102, 1, 2, 3, 5, 4];
console.log(`Array: [${numbers}]`);

console.log(`Sorted array in ascending order:${sortArray(numbers, 'asc')}`);

console.log(`Sorted array in descending order:${sortArray(numbers, 'desc')}`);
