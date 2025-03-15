import {API_KEY, BASE_URL} from './updateData.js'

export async function fetchGenres() {
  try{
    let response = fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    response.json()
    let data = response.json
    return data;

    }

    catch (error){

    }
  
}


  .then(res => res.json())
  .then(data => {
    fs.writeFileSync('genres.json', JSON.stringify(data, null, 2));
  })
  .catch(err => console.error(err));