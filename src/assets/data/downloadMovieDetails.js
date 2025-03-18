import { API_KEY, BASE_URL } from './updateData.js'

export async function fetchMovieDetails (moviesId) {
    
    const movies = [];
    for (let id of moviesId){
        try{
            const response = await fetch (`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
            const data = await response.json();
            movies.push(data)
            
        } catch (error){
            console.error("Error en la pelicula con id:" + id + " " + error)
        }
    }
    return movies;
}
