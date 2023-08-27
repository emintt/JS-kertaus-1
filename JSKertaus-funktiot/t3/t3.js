/* Write a JavaScript program that prompts the user to enter a series of numbers one by one
and extracts and displays only the even numbers from the entered values using the for...of loop.

1. Define an empty array to store the numbers entered by the user.

2. Use a loop (e.g., while or do...while) to prompt the user for numbers and add them to the
array until the user decides to stop.

3. Use the for...of loop to iterate over the entered values stored in the array.

4. Inside the loop, check if the current number is even using the modulo operator %.

5. If the current number is even, display it on the HTML document.

6. After the loop completes, display a message indicating the end of the program.

Prompts:

Enter a number (or 'done' to finish): 5
Enter a number (or 'done' to finish): 12
Enter a number (or 'done' to finish): 8
Enter a number (or 'done' to finish): 3
Enter a number (or 'done' to finish): 10
Enter a number (or 'done' to finish): done
Example Output:

Even Numbers: 12, 8, 10
Prompts:

Enter a number (or 'done' to finish): 1
Enter a number (or 'done' to finish): 3
Enter a number (or 'done' to finish): 5
Enter a number (or 'done' to finish): 7
Enter a number (or 'done' to finish): done
Example Output:

Even Numbers: None
6p*/
'use strict';
// create array of numbers
const numbers = [];
let more = true;
while (more) {
  const numberStr = prompt(`Enter a number (or 'done' to finish)`);
  const number = parseInt(numberStr);
  if (number) {
    numbers.push(number);
  } else if (numberStr === 'done') {
    more = false;
  }
}
// print
const p1 = document.createElement('p');
p1.innerText = `Numbers: ${numbers}`;
document.querySelector('#kohde').appendChild(p1);

// check even numbers
const evenNumbers = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
console.log(evenNumbers);

// print even numbers
const p2 = document.createElement('p');
if (evenNumbers.length !== 0) {
  p2.innerText = `Even numbers: ${evenNumbers}`;
} else {
  p2.innerText = `Even numbers: None `;
}

document.querySelector('#kohde').appendChild(p2);
