/* Write a program that allows users to track and rate their favorite movies. The program should
prompt the user to enter the details of each movie, including the title and rating on a scale of 1 to 5.
The program should store the user input in an array of objects using object literals. Once all the
 movie ratings have been entered, the program should sort the movies based on their ratings and
  determine the highest-rated movie. Finally, it should display the sorted list of movies and the
   highest-rated movie on the HTML document.

Use object literals to represent each movie, with properties such as title and rating.
Prompt the user to enter the number of movies they want to rate.
Use a loop to gather user input for each movie, including the title and rating. Store the movie details
  in an array of objects.
Sort the array of movie objects based on the ratings, from highest to lowest.
Determine the highest-rated movie by accessing the first element of the sorted array.
Display the sorted list of movies and the highest-rated movie on the HTML document.
6p/  */
'use strict';
const movies = [];

let more = true;
while (more) {
  const title = prompt('Syötä elokuvan nimi');
  const rating = prompt('Syötä arvio (1-5)');
  // const movie = {title: title, rating: rating}; sama kuin seuraava:
  const movie = {title, rating};
  movies.push(movie);

  more = confirm('Haluatko syötä lisää?');
}

/* const movies = [
  {title: 'Kinh van hoa', rating: 5},
  {title: 'Bo gia', rating: 2},
  {title: 'Sun', rating: 3},
  {title: 'Moon', rating: 4},
]; */

function sortMovies(a, b) {
  const vertailu = b.rating - a.rating;
  return vertailu;
}

movies.sort(sortMovies);

console.log(movies);

for (const movie of movies) {
  const td1 = document.createElement('td');
  td1.innerText = movie.title;

  const td2 = document.createElement('td');
  td2.innerText = movie.rating;

  const tr = document.createElement('tr');
  tr.appendChild(td1);
  tr.appendChild(td2);

  document.getElementById('kohde').appendChild(tr);
}

const favourite = movies[0];
document.getElementById('fav').innerText = favourite.title;
