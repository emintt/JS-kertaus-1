/*
Write a program that calculates the distance between two points on a 2D plane
and displays the result in an HTML document. The program should prompt the user
for the coordinates of two points (x, y) and then calculate the Euclidean distance
 between them using the formula:
Distance = √((x2 - x1)^2 + (y2 - y1)^2)
In total, there will be four prompts to input the x and y coordinates for the two points.
You can do it also with fewer promts if you use string methods like split().
3p */
'use strict';
const point1 = prompt('Eka pisteen koordinatit, ero pisteella: ');
const point2 = prompt('Toka pisteen koordinatit, ero pisteella: ');

const point1Array = point1.split(',');
const point2Array = point2.split(',');

const x1 = +point1Array[0];
const y1 = +point1Array[1];

const x2 = +point2Array[0];
const y2 = +point2Array[1];

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(point1Array);

const vastaus = `Annettu pisteiden etäisyys: ${distance}`;

// tulostus
document.getElementById('kohde').innerHTML = vastaus;
