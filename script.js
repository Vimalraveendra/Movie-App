import MOVIE_API_KEY from './apikey.js';


const API_URL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${MOVIE_API_KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

const mainEl = document.getElementById('main')

//  initially call the popular movies
getMovies();

async function getMovies(){
    const response = await fetch(API_URL);
    const  moviesData = await response.json()
    showMovies(moviesData.results)
}

 function showMovies(moviesList){
    moviesList.forEach(movie => {
        const {title, poster_path,vote_average} = movie
         const movieEl = document.createElement('div')
         movieEl.classList.add('movie')
         movieEl.innerHTML=`
         <img src="${IMG_PATH + poster_path}" alt="${title}">
           </div>
           <div class="movie-info">
               <h3>${title.length<18?`${title}`:`${title.substring(0,15)}...`}</h3>
               <span class="${getClassByRate(vote_average)}">${vote_average}</span> 
           </div>
       
         `
         mainEl.appendChild(movieEl)
    });

}


function getClassByRate(vote){
    if(vote>=8){
        return 'green'
    }else if(vote>=5){
         return 'orange'
    }else{
         return 'red'
    }
}