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