import fs from 'fs';
import fetch from 'node-fetch';

const API_KEY = '';
const BASE_URL = 'https://api.themoviedb.org/3';

fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        fs.writeFileSync('movies.json', JSON.stringify(data.results, null, 2));
    })
    .catch(error => {
        console.error('ERROR');
    });