import MOVIE_API_KEY from './apikey.js';


const API_URL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${MOVIE_API_KEY}&page=1`;

getMovies();
async function getMovies(){
    const response = await fetch(API_URL);
    const  moviesData = await response.json()
    console.log(moviesData)
}