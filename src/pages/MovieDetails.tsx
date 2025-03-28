import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import style from '../components/modules/MovieDetails.module.css'
import movieDetails from '../assets/data/movieDetails.json'
import topRated from '../assets/data/topRated.json'
import distribution from '../assets/data/distribution.json'
import ActorCard from '../components/ActorCard'
import { Movie, Actor } from '../types/Movie'

const MovieDetails = () => {


    //se rescata el id para seleccionar la pelicula objetivo.
    const {id} = useParams();
    let movie = movieDetails.find((movieData) => movieData.id.toString() === id);
    
    //se rescata la lista de favoritos guardada en storage para declarar el estado de initialFavoriteState para su uso en el hook del estado inicial del boton de favoritos
    let moviesStorage = JSON.parse(localStorage.getItem('FavoriteMovies') || '[]');
    let initialFavoriteState = !!moviesStorage.find((movieStoraged: Movie) => movieStoraged.id === movie?.id)

    //se hace la lista de recomendados en base a que uno de los generos sean similares
    //se usa some para buscar al menos 1 genero que coincida, se usan 2 some para comparar los ids
    const recomendationList = movieDetails.filter((movieDetail) => movieDetail.genres.some((genre) => movie?.genres.some((movieGenre) => movieGenre.id === genre.id && movie.id != movieDetail.id)))
    console.log(recomendationList)
    
    const [isOnFavorites, setOnFavorites] = useState(initialFavoriteState);
    
    useEffect(() =>{
        setOnFavorites(initialFavoriteState)
    },[id])
    const cast = distribution.find((castData) => castData.id.toString() === id)?.cast;
    
    //localStorage.removeItem('FavoriteMovies')
    //Seccion de favoritos    
    
    const addMovie = () =>{
        moviesStorage.push(movie)
        localStorage.setItem('FavoriteMovies', JSON.stringify(moviesStorage))
        console.log("Pelicula agregada a favoritos: " + localStorage)
    }
    
    const removeMovie = () =>{
        let index = moviesStorage.findIndex((storagedMovie: Movie) => storagedMovie.id === movie?.id)
        moviesStorage.splice(index, 1)
        localStorage.setItem('FavoriteMovies', JSON.stringify(moviesStorage))
        console.log("Pelicula eliminada de favoritos: " + localStorage)
    }
    const HandleClick = () => {
        
        if(isOnFavorites){
            removeMovie()
        } else{
            addMovie()
        }
        setOnFavorites(!isOnFavorites);
    }
    
    const text = isOnFavorites ? 'Remove' : 'Add'
    
    useEffect (() =>{
        const details = document.getElementById('details');
        if (details){
            details.style.background =
            `linear-gradient(to right,rgb(40, 94, 49) 30%,rgba(0,0,0,0.1) 70%),
            linear-gradient(to left,rgba(40, 94, 49),rgba(0,0,0,0)),
            url(https://image.tmdb.org/t/p/w1280${movie?.backdrop_path})`;
            details.style.backgroundRepeat = 'no-repeat';
            details.style.backgroundPosition = '180% 0%';
            details.style.backgroundColor = 'black';
        }
        
    },[movie]);
    
    
    return(
        <main className='app-content'>
            <section className={style.test}>
                <div id='details' className={style.details}>
                    <div className={style.mainDetails}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                        
                    </div>
                    <div className={style.subDetails}>
                        <h1>{movie?.title}: {movie?.tagline}</h1>
                        <h3>{movie?.release_date}</h3>
                        <h2>{movie?.vote_average.toFixed(1)}</h2>
                        <button onClick={() => {HandleClick()}}>{text}</button>
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
                        {cast?.map((actor: Actor) => { 
                            return <ActorCard key={actor.id} actor={actor}></ActorCard>
                        })}
                    </div>
                </div>
                <div>
                    <h2>Similar Movies</h2>
                    <div className={style.recomendationList}>
                        {recomendationList.map((recomendedMovie) =>(
                            <h3 key={recomendedMovie.id}>{recomendedMovie.title}</h3>
                        ))}
                    </div>
                </div>
            </section>
        </main>
        
    )
}

export default MovieDetails