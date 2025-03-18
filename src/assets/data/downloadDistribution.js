import { API_KEY, BASE_URL} from "./updateData.js";

export async function fetchDistribution (moviesId){

    console.trace("📌 fetchDistribution llamado con:", moviesId);
    const distributionData = []
    try{
        for (let id of moviesId){
            try{
                const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
                const data = await response.json();
                distributionData.push(data)
    
            } catch (error){
                console.error("Error con la pelicula con id: " + error)
            }
        }
     
    } catch (error) {
        console.error(error)
    }
    
    return distributionData;
    

}
