import fs from 'fs';
import fetch from 'node-fetch';

const API_KEY = '93561c86d4e411400015148457559807';
const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=';


fetch(`${url}${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    fs.writeFileSync('genres.json', JSON.stringify(data, null, 2));
  })
  .catch(err => console.error(err));