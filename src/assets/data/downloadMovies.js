import {API_KEY, BASE_URL} from './updateData.js'

export async function movieFetch() {
    console.log('Actualizando películas...')
    try{
        let response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
        let data = await response.json();
    
        console.log('Actualización de películas terminada, cantidad de peliculas: ')
        
        return data.results
        
    } catch (error){
        console.log('Error intentando actualizar películas: ' + error)
    }
    
}
