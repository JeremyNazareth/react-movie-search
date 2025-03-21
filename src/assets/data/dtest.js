import favoriteMovies from './favoriteMovies.json' with {type: "json"}
import fs from "fs"

let favoriteMoviesList = favoriteMovies

let movie1 = {
    id: 2,
    name: "Sonic 2"
}

let movie2 = {
    id: 3,
    name: "Sonic 3"
}

const addMovie = (movie) =>{
    favoriteMoviesList.push(movie)
}

const removeMovie = (movie, moviesList) =>{
    console.log(`Lista original: ${moviesList.map((movieSaved) => movieSaved.name).join(" ")}`)
    console.log(`Removiendo: ${JSON.stringify(movie, null, 2)}`)

    let index = moviesList.findIndex((movieSaved) => movieSaved.id === movie.id)
    moviesList = moviesList.splice(index,1)
    
    console.log(`Lista final: ${moviesList.map((movieSaved) => movieSaved.name).join(" ")}`)
    return moviesList;
}

const saveList = () => {
    fs.writeFileSync('favoriteMovies.json', JSON.stringify(favoriteMoviesList, null, 2))
}



saveList()
//removeMovie(movie);


