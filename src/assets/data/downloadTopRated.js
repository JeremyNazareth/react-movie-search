import fs from 'fs';
import fetch from 'node-fetch';

const BASE_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const API_KEY = '';
const JSNAME = 'topRated.json'

fetch(`${BASE_URL}${API_KEY}`)
    .then(response => response.json())
    .then(data => {        
        fs.writeFileSync(JSNAME, JSON.stringify(data.results, null, 2));
        
    })
    .catch(error => {
        console.error('ERROR');
    });
