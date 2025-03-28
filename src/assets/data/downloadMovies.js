import {API_KEY, BASE_URL} from './updateData.js'

export async function fetchMovie() {
    console.log('Actualizando películas...')
    let movies = []
    try{
        for(let a = 1; a < 5; a++){
            let response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${a}`)
            let data = await response.json();
            movies.push(... data.results)
        }
        
        return movies
        
    } catch (error){
        console.log('Error intentando actualizar películas: ' + error)
    }
    
}
