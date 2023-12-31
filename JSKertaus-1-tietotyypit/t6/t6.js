/* Write a program that prompts the user to enter a positive integer and generates a multiplication
 table up to that number using a for loop. The multiplication table displays the product of each
  pair of numbers from 1 to the entered number.
Your program should follow these steps:

Write JavaScript code that prompts the user to enter a positive integer using the prompt() function.
Store the user's input in a variable.
Convert the user's input from a string to a number.
Use nested for loops to generate the multiplication table.
The outer loop will iterate from 1 up to the entered number, representing the rows of the table.
The inner loop will also iterate from 1 up to the entered number, representing the columns of the table.
Inside the nested loops, calculate the product of the current row and column values.
Display each product in a formatted way to create the multiplication table on the HTML document.
Example Output:

Enter a positive integer: 5

Multiplication Table:
1   2   3   4   5
2   4   6   8   10
3   6   9   12  15
4   8   12  16  20
5   10  15  20  25
Enter a positive integer: 3

Multiplication Table:
1   2   3
2   4   6
3   6   9
Hints:

Define a variable to hold the user's input.
Use nested for loops to generate the multiplication table.
Calculate the product of the current row and column values inside the nested loops.
Display each product in a formatted way to create the multiplication table on the HTML document.
Example html result:

<table>
  <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
  </tr>
  <tr>
      <td>4</td>
      <td>5</td>
      <td>6</td>
  </tr>
  <tr>
      <td>7</td>
      <td>8</td>
      <td>9</td>
  </tr>
</table>
6p*/
'use strict';
const numeroStr = prompt('Anna positiivinen kokonaisluku');
const numero = parseInt(numeroStr);
let tulo = 0;
let tr = '';
let td = '';
const table = document.createElement('table');

for (let i = 1; i <= numero; i++) {
  tr = document.createElement('tr');
  for (let j = 1; j <= numero; j++) {
    td = document.createElement('td');
    tulo = i * j;
    td.innerText = `${tulo}`;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

// tulostus
document.querySelector('#kohde').appendChild(table);
