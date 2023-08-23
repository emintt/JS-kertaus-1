/* Write a program that prompts the user for a temperature in Celsius and converts
it to Fahrenheit and Kelvin. The program should then display the converted temperatures
 in an HTML document. Calculate the temperature in Fahrenheit by using the formula:
 F = (C * 9/5) + 32, where F is the temperature in Fahrenheit and C is the temperature in Celsius.
2p */

'use strict';

const asteetC = +prompt('Syötä celcius asteet');

const asteetF = (asteetC * 9) / 5 + 32;
const asteetK = asteetC + 273.15;

const vastaus = `${asteetC} astetta celciusta on ${asteetF} astetta farenheitta
ja ${asteetK} astetta kelvinta`;

// tulostus
document.getElementById('kohde').innerHTML = vastaus;
