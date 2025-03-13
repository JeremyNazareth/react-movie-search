import fs from 'fs';
import fetch from 'node-fetch'
import movies from './movies.json' with {type: 'json'}
import { stringify } from 'querystring';

const API_KEY = '';
const URL = 'https://api.themoviedb.org/3/movie/{movie_id}/credits';
const JSNAME = 'actors.json';
const movieIds = movies.map((movie) => movie.id)
const movieDistribution = []

const fetchDistribution = async () => {
    for(let id of movieIds){
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits&${API_KEY}`)
            const data = await response.json();
            console.log(typeof(data) + ": " + data)
            movieDistribution.push(data)
        } catch (error){
            console.error("Error con la pelicula con id: " + error)
        }
    }
    console.log
    fs.writeFileSync(JSNAME, JSON>stringify(movies,null,2));
    console.log('Peliculas guardadas correctamente en ' + JSNAME)
}

fetchDistribution()