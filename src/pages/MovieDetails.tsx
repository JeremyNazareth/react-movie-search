import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import style from '../components/modules/MovieDetails.module.css'
import movieDetails from '../assets/data/movieDetails.json'
import distribution from '../assets/data/distribution.json'
import ActorCard from '../components/ActorCard'
import { Movie, Actor, Genre } from '../types/Movie'


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
    
    const date = new Date(movie? movie.release_date : "00/00/0000");
    const movieDate = `${new Intl.DateTimeFormat("en-US", {month: "long"}).format(date)} ${date.getDay().toString()}, ${date.getFullYear().toString()}`
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

    let genresMovie: string[] = movie?.genres.map((genre) => genre.name) || [];
    //<button style={{width:50,height:60}} onClick={() => {HandleClick()}}>{text}</button>
    
    console.log(movie?.genres.join(",").toString())
    
    return(
        <main className='full-body'>
            <section className={style.test}>
                <div id='details' className={style.details}>
                    <div className={style.mainDetails}>
                        <img style={{margin:0}} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                        
                    </div>
                    <div className={style.subDetails}>
                        <div style={{display:"flex"}}>
                            <p className={style.title}>{movie?.title}&nbsp;</p>
                            <p className={style.tagline}>{movie?.tagline}</p>
                        </div>
                        <h3>{genresMovie.join(", ")}</h3>
                        <h3 style={{marginBottom:15}}>{movieDate}</h3>
                        <h4>Overview</h4>
                        <h5> {movie?.runtime}mins</h5>
                        <div className={style.overview}>
                            <h5>{movie?.overview}</h5>
                        </div>
                        <div className={style.movieRank}>
                            <p className={style.rankLogo}>M&nbsp;</p>
                            <p className={style.rankValue}>{movie?.vote_average.toFixed(1)}</p>
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
                    <h2>Casting</h2>
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
                            <div className={style.recomendedMovie}>
                                <img className={style.recomendedMoviePoster} src={`https://image.tmdb.org/t/p/w500${recomendedMovie?.poster_path}`} alt="" />
                                <p className={style.recomendedMovieTitle}>{recomendedMovie.title}</p>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MovieDetails