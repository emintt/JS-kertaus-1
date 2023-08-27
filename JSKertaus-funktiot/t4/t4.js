/* Create a function called sortArray that accepts an array of numbers as a parameter and
 returns a new array with the numbers sorted in ascending order.

No need to prompt for the numbers. Use a hard coded array. Use console.log to print
the original array and the sorted array.
2p */
'use strict';
function sortArray(numbers) {
  const sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return sortedNumbers;
}

const numbers = [11, 10, 9, 8, 7, 89, 102, 1, 2, 3, 5, 4];
console.log(`Array: [${numbers}]`);

const sorted = sortArray(numbers);
console.log(`Sorted array in ascending order:${sorted}`);
