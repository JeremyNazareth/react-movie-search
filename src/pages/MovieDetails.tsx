import style from '../components/modules/MovieDetails.module.css'
import { useParams } from 'react-router-dom'
import movieDetails from '../assets/data/movieDetails.json'
import distribution from '../assets/data/distribution.json'
import ActorCard from '../components/ActorCard'
import { useEffect } from 'react';


const MovieDetails = () => {

    const {id} = useParams();
    const movie = movieDetails.find((movieData) => movieData.id.toString() === id)
    const cast = distribution.find((castData) => castData.id?.toString() === id)
    console.log(distribution.find((castData) => castData.id?.toString() === id))

    useEffect (() =>{
        const details = document.getElementById('details');
        details.style.background =
        `linear-gradient(to right,rgb(40, 94, 49) 30%,rgba(0,0,0,0.1) 70%),
        linear-gradient(to left,rgba(40, 94, 49),rgba(0,0,0,0)),
        url(https://image.tmdb.org/t/p/w1280${movie?.backdrop_path})`;
        details.style.backgroundRepeat = 'no-repeat';
        details.style.backgroundPosition = '180% 0%';
        details.style.backgroundColor = 'black';
        {console.log(`https://image.tmdb.org/t/p/w500${movie?.poster_path}`)}
    },[movie]);
    
    
    return(
        <div className='app-content'>
            <div className={style.test}>
                <div id='details' className={style.details}>
                    <div className={style.mainDetails}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                        
                    </div>
                    <div className={style.subDetails}>
                        <h1>{movie?.title}: {movie?.tagline}</h1>
                        <h3>{movie?.release_date}</h3>
                        <h2>{movie?.vote_average.toFixed(1)}</h2>
                        <h4>Overview</h4>
                        <h5> {movie?.runtime}mins</h5>
                        <div className={style.overview}>
                            <h5>{movie?.overview}</h5>
                        </div>
                        <h4>Original Language</h4>
                        <div>
                            <h5>{movie?.original_language}</h5>
                        </div>
                        <h4>Production company</h4>
                        <div>
                            <h5></h5>
                        </div>
                    </div>
                </div>
                <div className={style.distribution}>
                    <h2>Distribution</h2>
                    <div className={style.cast}>
                        {cast?.cast?.map((actor) => (
                            <p>{actor.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default MovieDetails