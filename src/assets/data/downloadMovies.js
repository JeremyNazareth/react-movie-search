import fs from 'fs';
import fetch from 'node-fetch';

const API_KEY = '93561c86d4e411400015148457559807';
const BASE_URL = 'https://api.themoviedb.org/3';

fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        fs.writeFileSync('movie.json', JSON.stringify(data.results, null, 2));
    })
    .catch(error => {
        console.error('ERROR');
    });