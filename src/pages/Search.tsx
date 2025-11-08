import { useParams } from "react-router-dom"
import styles from "../components/modules/pages/Search.module.css"
import movies from "../assets/data/movies.json"
import genres from "../assets/data/genres.json"
import VerticalMovieList from "../components/VerticalMovieList"
import { Movie } from '../types/Movie'
import { useState, useEffect } from "react"

const Search = () => {

    //Searched string
    const {search} = useParams();
    
    //Filter system with .includes()
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search ? search  : "Desconocido")
    )
    
    const [currentMovies, setCurrentMovies] = useState<Movie[]>(filteredMovies);

    useEffect(() =>{
        setCurrentMovies(filteredMovies)  
    }, [search, movies]);


    return (
        <main className="main-body">
            <p className={styles.title}>
                Showing results for "{search}"
            </p>
            <VerticalMovieList movieList={currentMovies} genres={genres}></VerticalMovieList>
        </main>
    )
    
}

export default Search