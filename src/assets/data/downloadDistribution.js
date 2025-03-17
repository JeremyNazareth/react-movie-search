import { API_KEY, BASE_URL} from "./updateData.js";

export async function fetchDistribution(movieIds){

    let distributionData = []
    for(let id in movieIds){
        try{
            const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
            const data = await response.json();
            distributionData.push(data)

        } catch (error){
            console.error("Error con la pelicula con id: " + error)
        }
    }
    return distributionData;
    

}

fetchDistribution()