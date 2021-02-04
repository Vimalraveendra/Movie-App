import MOVIE_API_KEY from './apikey.js';


const API_URL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${MOVIE_API_KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_URL =`https://api.themoviedb.org/3/search/movie?&api_key=${MOVIE_API_KEY}&query=`

const mainEl = document.getElementById('main')
const formEl  =document.getElementById('form')
const inputEl = document.getElementById('search')

//  initially call the popular movies
getMovies(API_URL);

async function getMovies(url){
    const response = await fetch(url);
    const  moviesData = await response.json()
    showMovies(moviesData.results)
}

 function showMovies(moviesList){
      // clear the main element container
      mainEl .innerHTML="";
     console.log("movieList",moviesList)
    moviesList.forEach(movie => {
        const {title, poster_path,vote_average} = movie
        if(poster_path!==null){
         const movieEl = document.createElement('div')
         movieEl.classList.add('movie')
         movieEl.innerHTML=`
         <img src="${ poster_path !=null?`${IMG_PATH + poster_path}`:`hello`}" alt="${title}">
           </div>
           <div class="movie-info">
               <h3>${title.length<18?`${title}`:`${title.substring(0,15)}...`}</h3>
               <span class="${getClassByRate(vote_average)}">${vote_average}</span> 
           </div>
       
         `
         mainEl.appendChild(movieEl)
        }
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


formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputValue= inputEl.value
    if(inputValue){
    getMovies(SEARCH_URL + inputValue)
    }
    inputEl.value=""
})