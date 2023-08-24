/* Write a program that prompts the user to enter the lengths of three sides of a triangle
and determines the type of triangle based on the side lengths. The program should classify the
triangle as equilateral (all sides are equal), isosceles (two sides are equal),
or scalene (no sides are equal). Print the result on the HTML document.
try to use &&, || and ! operators
3p*/
'use strict';

const sivuA = +prompt('Anna kolmion ensimmäisen sivun pituus');
const sivuB = +prompt('Anna kolmion toisen sivun pituus');
const sivuC = +prompt('Anna kolmion komannen sivun pituus');

let vastaus = '';
if (sivuA === sivuB && sivuB === sivuC) {
  // jos sivut ovat kaikki yhtä pitkiä ==> tasasivuinen kolmio
  vastaus = `Kolmio on tasasivuinen kolmio`;
} else if (sivuA === sivuB || sivuB === sivuC || sivuC === sivuA) {
  // jos kaksi sivua ovat yhtä pitkiä = tasakylkinen kolmio
  vastaus = `Kolmio on tasakylkinen kolmio`;
} else {
  // jos sivut ovat kaikki eri pituiset -> epäsäännöllinen kolmio
  vastaus = `Kolmio on epäsäännöllinen kolmio`;
}

// tulostus
document.getElementById('kohde').insertAdjacentHTML('beforeend', vastaus) = vastaus;

