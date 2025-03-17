import { API_KEY, BASE_URL } from "./updateData.js";


export async function fetchTopRatedMovies (){
    let response = await fetch(`${BASE_URL}/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`)
    let data = await response.json()
    return await data.results;
}

    
