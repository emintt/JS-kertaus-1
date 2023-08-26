/* Write a JavaScript program that focuses on the basic concepts of arrays. Your program should include the
 following requirements:

1. Create an array called fruits and initialize it with the following elements: "apple", "banana", "orange",
" grape", "kiwi".
2. Display the contents of the fruits array in the console.
3. Calculate and display the length of the fruits array.
4. Access and display the element at index 2 in the fruits array in the console.
5. Access and display the last element in the fruits array using the length property in the console.
6. Create an empty array called vegetables.
7. Prompt the user to enter three vegetables one by one, and add each entered vegetable to the vegetables
array using the push() method.
8. Display the contents of the vegetables array in the console.
9. Calculate and display the length of the vegetables array.
Example Output:

Fruits: ["apple", "banana", "orange", "grape", "kiwi"]
Length of Fruits: 5
Element at Index 2: "orange"
Last Element of Fruits: "kiwi"
Vegetables: ["carrot", "broccoli", "cabbage"]
Length of Vegetables: 3
3p */
'use strict';
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const fruitsLength = fruits.length;
console.log(`Fruits: ${fruits}`);
console.log(`Length of Fruits: ${fruitsLength}`);

console.log(`Element at Index 2: ${fruits[2]}`);
console.log(`Last element of Fruits: ${fruits[fruitsLength - 1]}`);

const vegetables = [];
for (let i = 0; i < 3; i++) {
  const vegetable = prompt('Enter vegetable name');
  vegetables.push(vegetable);
}
console.log(`Vegetables: ${vegetables}`);
console.log(`Length of vegetables: ${vegetables.length}`);
