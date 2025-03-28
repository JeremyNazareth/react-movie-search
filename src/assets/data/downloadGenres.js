import {API_KEY, BASE_URL} from './updateData.js'

export async function fetchGenres() {
  try{    
    let response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    let data = await response.json()
    return await data.genres;
    }
    catch (error){
      console.log(`Error con descargar la lista de genero: ` + error)
    }
  
}
