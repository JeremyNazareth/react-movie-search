import fs from 'fs';
import dotenv from 'dotenv';

import { fetchMovie } from './downloadMovies.js';
import { fetchMovieDetails } from './downloadMovieDetails.js'; 
import { fetchGenres } from './downloadGenres.js';
import { fetchTopRatedMovies } from './downloadTopRated.js';
import { fetchDistribution } from './downloadDistribution.js';
import { fetchUpcomingMovies } from './downloadUpcomingM.js';

dotenv.config({path: '../../../.env'});
export const API_KEY = process.env.TMDB_API_KEY
export const BASE_URL = 'https://api.themoviedb.org/3';

const MoviesJSNAME = 'movies.json';
const GenreJSNAME = 'genres.json';
const MovieDetailsJSNAME = 'movieDetails.json';
const TopRatedJSNAME = 'topRated.json'
const DistributionJSNAME = 'distribution.json';
const UpcomingJSNAME = 'upcoming.json'

let movies = []
let genres = []
let movieDetails = []
let topRated = []
let distribution = []
let upComing = []

async function catchIds  (popularMovies, topRatedMovies, upComingMovies) {
    movies = [...popularMovies, ...topRatedMovies, ...upComingMovies]
    let moviesId = movies.map((movie)=> movie.id )
    return moviesId;
}

const updateData = async () =>{
    movies = [... await fetchMovie()];
    topRated = await fetchTopRatedMovies();
    upComing = await fetchUpcomingMovies();
    console.log(movies.length)
    let moviesId = await catchIds(movies, topRated, upComing);

    movieDetails = await fetchMovieDetails(moviesId);
    distribution = await fetchDistribution(moviesId);
    genres = await fetchGenres();
    
}
 
await updateData();

fs.writeFileSync(MoviesJSNAME,JSON.stringify(movies, null, 2))
fs.writeFileSync(TopRatedJSNAME, JSON.stringify(topRated, null, 2))
fs.writeFileSync(MovieDetailsJSNAME,JSON.stringify(movieDetails, null, 2))
fs.writeFileSync(GenreJSNAME, JSON.stringify(genres, null, 2));
fs.writeFileSync(DistributionJSNAME, JSON.stringify(distribution, null, 2));
fs.writeFileSync(UpcomingJSNAME, JSON.stringify(upComing, null, 2))