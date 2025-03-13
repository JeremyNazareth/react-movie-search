import fs from 'fs';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config({path: '../../../.env'});

const API_KEY = process.env.TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3';

console.log(API_KEY)

fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        fs.writeFileSync('movies.json', JSON.stringify(data.results, null, 2));
    })
    .catch(error => {
        console.error('ERROR');
    });