import fs from 'fs';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { movieFetch } from './downloadMovies.js';

dotenv.config({path: '../../../.env'});
export const API_KEY = process.env.TMDB_API_KEY
export const BASE_URL = 'https://api.themoviedb.org/3';
const MovieJSNAME = 'movies.json';
const GenreJSNAME = 'genres.json';
const MovieDetailsJSNAME = 'b';
let movies = []
let genres = []
let movieDetails = []
let Distribution = []

const updateData = async () =>{
    movies = await movieFetch();
}
 
await updateData();

fs.writeFileSync(MovieJSNAME,JSON.stringify(movies, null, 2))
console.log(`movies.json actualizado con ${movies.length} películas.`)