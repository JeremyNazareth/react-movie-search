import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import style from '../components/modules/MovieDetails.module.css'
import movieDetails from '../assets/data/movieDetails.json'
import distribution from '../assets/data/distribution.json'
import ActorCard from '../components/ActorCard'
import { Movie, Actor, Genre } from '../types/Movie'
import { Heart, HeartOff } from 'lucide-react'
import useNavigateToMovie from '../components/NavigateToMovie';

const MovieDetails = () => {

    //se rescata el id para seleccionar la pelicula objetivo.
    const {id} = useParams();
    let movie = movieDetails.find((movieData) => movieData.id.toString() === id);
    const navigate = useNavigateToMovie();
    const languages: { [key:string] : string} ={
        en: "English",
        es: "Spanish",
        it: "Italian",
        ja: "Japanese",
        hi: "Hindi",
        ko: "Korean"
    }

    
    
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

    const movieDistribution = distribution.find((distributionMovie) => distributionMovie.id.toString() === id);
    const cast = movieDistribution.cast
    const crew = movieDistribution.crew
    const director = crew.find((member) => member.job === "Director")
    const musicComposer = crew.find((member) => member.job === "Original Music Composer")
    const producer = crew.find((member) => member.job === "Producer")
    const soundDisigner = crew.find((member) => member.job === "Sound Designer")
    const photographyDirector = crew.find((member) => member.job === "Director of Photography")
    
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
        const cover = document.getElementById('cover');
        if (cover){
            cover.style.background =
            `linear-gradient(to right,rgb(40, 94, 49) 30%,rgba(0,0,0,0.1) 70%),
            linear-gradient(to left,rgba(40, 94, 49),rgba(0,0,0,0)),
            url(https://image.tmdb.org/t/p/w1280${movie?.backdrop_path})`;
            cover.style.backgroundRepeat = 'no-repeat';
            cover.style.backgroundPosition = '180% 0%';
            cover.style.backgroundColor = 'black';
        }
        
    },[movie]);

    let genresMovie: string[] = movie?.genres.map((genre) => genre.name) || [];
    //<button style={{width:50,height:60}} onClick={() => {HandleClick()}}>{text}</button>
    
    return(
        <main className='full-body'>
            <section id='cover' className={style.cover}>
                <div className={style.details}>
                    <div className={style.poster}>
                        <img style={{margin:0}} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                        <button className={style.favoriteBtn} onClick={() => {HandleClick()}}>
                            {isOnFavorites? <HeartOff color="#2E8B57" /> : <Heart color="#2E8B57"/>}
                        </button>
                    </div>
                    <div className={style.mainDetails}>
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
                        <h4>Director</h4>
                        <h5>{director?.name}</h5>
                    </div>
                </div>
                
            </section>
            <section >
                <h2 className={style.sectionTitle}>Crew</h2>
                <div className={style.crew}>
                    <div className={style.subDetail}>
                        <h4>Music Composer</h4>
                        <p>{musicComposer? musicComposer.name : "Unknown"}</p>
                    </div>
                    <div className={style.subDetail}>
                        <h4>Producer</h4>
                        <p>{producer? producer.name : "Unknown"}</p>
                    </div>
                    <div className={style.subDetail}>
                        <h4>Original Language</h4>
                        <p>{languages[movie? movie.original_language : "Unkown"]}</p>
                    </div>
                    <div className={style.subDetail}>
                        <h4>Sound Designer</h4>
                        <p>{soundDisigner? soundDisigner.name : "Unknown"}</p>
                    </div>
                    
                    <div className={style.subDetail}>
                        <h4>Director of Photography</h4>
                        <p>{photographyDirector? photographyDirector.name : "Unknown"}</p>
                    </div>
                </div>
            </section>
            <section className={style.distribution}>
                <h2 className={style.sectionTitle}>Casting</h2>
                <div className={style.cast}>
                    {cast?.map((actor: Actor) => { 
                        return <ActorCard key={actor.id} actor={actor}></ActorCard>
                    })}
                </div>
            </section>
            <section>
                <h2 className={style.sectionTitle}>Similar Movies</h2>
                <div className={style.recomendationList}>
                    {recomendationList.map((recomendedMovie) =>(
                        <div className={style.recomendedMovie} onClick={() => navigate(recomendedMovie.id.toString())}>
                            <img className={style.recomendedMoviePoster} src={`https://image.tmdb.org/t/p/w500${recomendedMovie?.poster_path}`} alt="" />
                            <p className={style.recomendedMovieTitle}>{recomendedMovie.title}</p>
                        </div>
                        
                    ))}
                </div>
            </section>
        </main>
    )
}

export default MovieDetails