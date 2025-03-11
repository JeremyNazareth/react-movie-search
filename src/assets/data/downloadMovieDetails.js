import fs from 'fs';
import fetch from "node-fetch"
import moviesData from './movies.json' with {type: 'json'}
const API_KEY = '?api_key=93561c86d4e411400015148457559807';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const JSNAME = 'movieDetails.json';
const movies = [];
const moviesId = moviesData.map((movie) => movie.id)

const fetchMovieDetails = async () => {
    for (let id of moviesId){
        try{
            const response = await fetch (`${BASE_URL}${id}${API_KEY}`)
            const data = await response.json();
            movies.push(data)
        } catch (error){
            console.error("Error en la pelicula con id:" + error)
        }
    }

    fs.writeFileSync(JSNAME, JSON.stringify(movies, null, 2));
    console.log('Películas guardadas correctamente en', JSNAME);
}

fetchMovieDetails();