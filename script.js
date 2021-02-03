import MOVIE_API_KEY from './apikey.js';


const API_URL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${MOVIE_API_KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

const mainEl = document.getElementById('main')

//  initially call the popular movies
// getMovies();

async function getMovies(){
    const response = await fetch(API_URL);
    const  moviesData = await response.json()
    showMovies(moviesData.results)
}

 function showMovies(moviesList){
     console.log(moviesList)
    moviesList.forEach(movie => {
         const imgEl = document.createElement('img')
          imgEl.src = IMG_PATH+movie.poster_path
         mainEl.appendChild(imgEl)
    });

}