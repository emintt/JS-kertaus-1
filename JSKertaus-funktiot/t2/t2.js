/* Write a JavaScript program that focuses on various array operations using the push(),
includes(), pop(), and numerical sorting functions. Your program should include the following
 requirements:
1. Create an empty array called numbers.
2. Prompt the user to enter five numbers, one by one, and add each entered number to the
 numbers array using the push() method.
3. Display the contents of the numbers array on the HTML document or in the console.
4. Prompt the user to enter a number and check if the entered number is included in the
 numbers array using the includes() method.
5. Display a message indicating whether the entered number is found or not found
 in the numbers array.
6. Remove the last number from the numbers array using the pop() method.
7. Display the updated numbers array on the HTML document or in the console.
8. Sort the numbers array in ascending numerical order using the sort() method
  with a custom comparison function.
9. Display the sorted numbers array on the HTML document or in the console.
Example Output:

Enter Number 1: 10
Enter Number 2: 5
Enter Number 3: 7
Enter Number 4: 3
Enter Number 5: 9

Numbers: [10, 5, 7, 3, 9]

Enter a Number to Search: 7
Number 7 is found in the array.

Updated Numbers: [10, 5, 7, 3]

Sorted Numbers: [3, 5, 7, 10]
3p
 */

const numbers = [];
for (let i = 0; i < 5; i++) {
  const number = +prompt(`Enter 5 numbers. Number ${i + 1}: `);
  numbers.push(number);
}

const p1 = document.createElement('p');
p1.innerText = `Numbers: [${numbers}]`;
const kohde = document.querySelector('#kohde');
kohde.appendChild(p1);
console.log(numbers);

// Search number in array
const numberToSearch = +prompt('Enter a number to search: ');
const p2 = document.createElement('p');
if (numbers.includes(numberToSearch)) {
  p2.innerText = `Number ${numberToSearch} is found in the array`;
} else {
  p2.innerText = `Number ${numberToSearch} is not found in the array`;
}
kohde.appendChild(p2);

// remove the last number in numbers array
numbers.pop();
const p3 = document.createElement('p');
p3.innerText = `Updated numbers array [${numbers}].`;
kohde.appendChild(p3);

// Sort the numbers array in ascending numerical order
numbers.sort(function (a, b) {
  return a - b;
});
const p4 = document.createElement('p');
p4.innerText = `Sorted numbers array [${numbers}].`;
kohde.appendChild(p4);
