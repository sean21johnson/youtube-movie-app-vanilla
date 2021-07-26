/*
    -Target the elements that we need to manipulate
        -id: form, movie_list
    -Declare variables at the top which will store the api endpoints

    -Functions necessary
        -getRandomMovies()
            -should return a list of random movies and pass them into a function that will display them (array of movie objects)
        -displayMovies()
            -should target the movie_list element and append HTML to it by looping through the array of objects passed in
                -the loop should only go up 15
            -first thing displayMovies should always do though is take the movie_list element and clear the HTML that's already in it
                -then build on the HTML based on the list of movies that were passed in
        -getSearchedMovies()
            -should take in a searchTerm
            -Reach out to the API with that searchTerm included
            -get the results and change the data response such that it mirrors the data we pass into displayMovies() from the randomMovies   

    -Create an event handler for when a user searches for a movie
        -Target the form and then do e.target.movie.value to get the value of the movie term searched

*/

// Target elements
let form = document.getElementById("form");
let movieList = document.getElementById("movie_list");

// Create an array of movies that will determine which should be showing an overview section
let overviewMovies = [];

// API Endpoints & Image source path
const APIURL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
	"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

async function getRandomMovies() {
	const response = await fetch(APIURL);
	const responseJson = await response.json();

	const { results } = responseJson;

	displayMovies(results);
}

function getSearchedMovies(e) {
	e.preventDefault();

	const searchTerm = e.target.movie.value;

    fetchSearchedMovies(searchTerm)
}

async function fetchSearchedMovies(searchTerm) {
    const response = await fetch(`${SEARCHAPI}${searchTerm}`)
    const responseJson = await response.json();

    const { results } = responseJson;

    displayMovies(results);
}

function displayMovies(movies) {
	console.log(movies);

	movieList.innerHTML = "";

	/*
    Properties needed: original_title, overview, vote_average, poster_path
    */

	movies.forEach((movie, i) => {
		movieList.innerHTML += `
            <li class="movie_element">
                <div class="poster_container">
                    <img src="${IMGPATH}${movie.poster_path}" alt="poster">
                </div>
                <div class="title_rating">
                    <h2>${movie.original_title}</h2>
                    <p class="rating">${movie.vote_average}</p>
                </div>
                <div class="overview_section">
                    <button onclick="handleOverviewExpansion('${i}')" class="overview_button">Overview</button> 
                    <div class="overview_details hide">
                        <p>${movie.overview}</p>
                    </div>
                </div>
            </li>
        `;
	});
}

function handleOverviewExpansion(index) {
	const overviewDetailsList =
		document.getElementsByClassName("overview_details");

	overviewDetailsList[index].classList.contains("hide")
		? overviewDetailsList[index].classList.remove("hide")
		: overviewDetailsList[index].classList.add("hide");
}



// Add event listener for search input
form.addEventListener("submit", getSearchedMovies);

getRandomMovies();
