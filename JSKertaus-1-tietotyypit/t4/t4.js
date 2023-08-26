/* Write a program that prompts the user to enter their score for a course assessment
and determines their grade based on the following grading scale:
Scores between 0 and 39 receive a grade of 0.
Scores between 40 and 51 receive a grade of 1.
Scores between 52 and 63 receive a grade of 2.
Scores between 64 and 75 receive a grade of 3.
Scores between 76 and 87 receive a grade of 4.
Scores between 88 and 100 receive a grade of 5.
Print the result on the HTML document.
3p */
'use strict';
const pisteet = +prompt('Anna pisteesi');
let arvosana;
let vastaus = '';
let ilmoitus = '';
if (pisteet >= 0 && pisteet <= 39) {
  arvosana = 0;
} else if (pisteet >= 40 && pisteet <= 51) {
  arvosana = 1;
} else if (pisteet >= 52 && pisteet <= 63) {
  arvosana = 2;
} else if (pisteet >= 64 && pisteet <= 75) {
  arvosana = 3;
} else if (pisteet >= 76 && pisteet <= 87) {
  arvosana = 4;
} else if (pisteet >= 88 && pisteet <= 100) {
  arvosana = 5;
} else {
  ilmoitus = `Syötä pisteet kokonaisluvun 0 - 100 välillä`;
}
console.log(arvosana);
if (arvosana !== undefined) {
  vastaus = `Sinun arvosanasi on ${arvosana}`;
} else {
  vastaus = ilmoitus;
}

document.querySelector('#kohde').insertAdjacentHTML('beforeend', vastaus);
