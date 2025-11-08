import { API_KEY, BASE_URL } from "./updateData.js";

export async function fetchUpcomingMovies () {
    let response = await fetch(`${BASE_URL}/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`)
    let data = await response.json()
    console.log(data);
    return await data.results;
}