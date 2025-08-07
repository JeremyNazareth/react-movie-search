import  useNavigateToMovie  from "../components/NavigateToMovie"
import styles from './modules/components/VerticalMovieList.module.css'
import genres from "../assets/data/genres.json"
import { FilterIcon, ChevronRight, ArrowRightFromLine } from 'lucide-react'
import { Movie, Genre } from '../types/Movie'
import { useState, useEffect } from "react"
import { use } from "i18next"
import { useLocation } from "react-router-dom"

interface MovieListProps{
    movieList: Movie[]
}

interface GenresProps{
    genres: Genre[]
}
const VerticalMovieList = ({movieList, genres}:MovieListProps & GenresProps) => {

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [currentMovies, setCurrentMovies] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isVisible, setIsVisible] = useState(false);

    const location = useLocation();
    const moviesPerPage = 4

    let navigation = useNavigateToMovie();

    /*
    const filterMark =  (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id , checked } = event.target;
        setSelectedFilters((prev) => 
            checked ? [...prev, id] : prev.filter((g) => g !== id) 
        )        
    }
    */

    const handleFilter = (id: string) => { 
        if(!selectedFilters.includes(id)){
            setSelectedFilters([...selectedFilters,id])
            console.log(`Genero ${id} agregado.`)
        } else{
            setSelectedFilters(selectedFilters.filter(filterId => filterId != id))
        }
    }

    const lastPage = movieList.length / moviesPerPage


    let previousBtnDisabled = currentPage < 2;
    let nextBtnDisabled = currentPage * moviesPerPage >= movieList.length;

    useEffect(() =>{
        let filteredMovies = movieList
        if (selectedFilters.length > 0){
            filteredMovies = movieList.filter((movie) => selectedFilters.every((filter) => movie.genre_ids.includes(Number(filter))))
        } 

        filteredMovies = filteredMovies.slice(
            (currentPage - 1) * moviesPerPage, currentPage * moviesPerPage
        )

        setCurrentMovies(filteredMovies)
    },[selectedFilters, movieList, currentPage])
    
    useEffect(() =>{
        setCurrentPage(1);
    }, [location.pathname])

    return(
        <section className={styles.verticalMovieList}>
            <div className={styles.sideFilters}>
                <h2>Genres</h2>
                
                <ul className={styles.sideFiltersContainer}>
                    {genres.map((genre)=> (                        
                        <div 
                            className={`${styles.sideFilter} ${selectedFilters.includes(genre.id.toString()) ? styles.filterAdded : ''}`}
                            onClick={() => handleFilter(genre.id.toString())}>
                            {genre.name}
                        </div>
                        ))}
                </ul>
            </div>
            
            <div className={styles.moviesContainer}>
                <div className={styles.topFilter}>
                    
                    <div className={styles.pagesContainer}>
                        <div className={styles.responsiveFilterContainer}>
                            <button
                            className={`${styles.filtersBtn} ${isVisible ? styles.btnActive : ''}`}
                            onClick={() => setIsVisible(!isVisible)}>
                                <FilterIcon color="#136e3a" strokeWidth={1.3}></FilterIcon>&nbsp;&nbsp;Genres 
                            </button>
                            { isVisible ?
                            (<ul className={styles.responsiveFilter}>
                                {genres.map((genre)=> (
                                    <li><input key={genre.id} id={`${genre.id}`} type="checkbox" className="form-check-input" onChange={filterMark} /><label className={styles.checkboxLabel}>{genre.name}</label></li>
                                ))}
                            </ul>) : ''
                            }   
                        </div>
                        <p className={styles.totalPages}>{movieList.length} movies found, {Math.round(movieList.length / 4)} pages</p>    
                        <div className={styles.btnsContainer}>
                            <button className={`${styles.pageBtn} ${styles.left}`} disabled={previousBtnDisabled}  onClick={() => setCurrentPage(1)} > <ArrowRightFromLine /> </button>
                            <button className={`${styles.pageBtn} ${styles.left}`} disabled={previousBtnDisabled} onClick={() => setCurrentPage(currentPage - 1)}><ChevronRight color="#2E8B57" /></button>
                            <button className={`${styles.pageBtn} ${styles.numberPageBtn}`} disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}> <p>{currentPage - 1}</p> </button>
                            <button className={styles.pageBtn} disabled> <p>{currentPage}</p></button>
                            <button className={`${styles.pageBtn} ${styles.numberPageBtn}`} disabled={currentPage === lastPage} onClick={() => setCurrentPage(currentPage + 1)}> <p>{currentPage + 1}</p> </button>
                            <button className={styles.pageBtn} disabled={nextBtnDisabled} onClick={() => setCurrentPage(currentPage + 1)}><ChevronRight color="#2E8B57"/></button>
                            <button className={`${styles.pageBtn}`} disabled={nextBtnDisabled}  onClick={() => setCurrentPage(lastPage)} > <ArrowRightFromLine /> </button>
                            
                        </div>                  
                    </div>
                </div>
                {currentMovies.map((movie: Movie) =>(  
                <article key={movie.id} onClick={() => navigation(movie.id.toString())} className={styles.movie}>
                    <div className={styles.posterContainer}>
                        <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    </div>
                    
                    <div className={styles.movieText}>
                        <header>
                            <h3>{movie.title}</h3>
                            <h5>{movie.release_date}</h5>
                        </header>
                        <div className={styles.overview}>
                            <p className={styles.textOverview} >{movie.overview}</p>
                        </div>
                        <div className={styles.movieData}>
                            <p className={styles.rating}>{movie.vote_average.toFixed(1)}</p>
                            <div className={styles.GenresContainer}>
                                {movie.genre_ids.map((moviegenreId, index) => {
                                    let genre = genres.find(genre => genre.id === moviegenreId)
                                    return <p  className={styles.genre} key={index}>{genre ? genre.name : "No hay generos disponibles"}</p>
                                })}
                            </div>
                        </div>
                    </div>
                </article>
                ))}
                {currentMovies.length === 0 && 
                <div className={styles.noMovies}>
                    <h2>Movie not Found</h2>
                </div>}

                <div className={styles.pagesContainer}>
                        <div className={styles.btnsContainer}>
                            <button className={`${styles.pageBtn} ${styles.left}`} disabled={previousBtnDisabled}  onClick={() => setCurrentPage(1)} > <ArrowRightFromLine /> </button>
                            <button className={`${styles.pageBtn} ${styles.left}`} disabled={previousBtnDisabled} onClick={() => setCurrentPage(currentPage - 1)}><ChevronRight color="#2E8B57" /></button>
                            <button className={`${styles.pageBtn} ${styles.numberPageBtn}`} disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}> <p>{currentPage - 1}</p> </button>
                            <button className={styles.pageBtn} disabled> <p>{currentPage}</p></button>
                            <button className={`${styles.pageBtn} ${styles.numberPageBtn}`} disabled={currentPage === lastPage} onClick={() => setCurrentPage(currentPage + 1)}> <p>{currentPage + 1}</p> </button>
                            <button className={styles.pageBtn} disabled={nextBtnDisabled} onClick={() => setCurrentPage(currentPage + 1)}><ChevronRight color="#2E8B57"/></button>
                            <button className={`${styles.pageBtn}`} disabled={nextBtnDisabled}  onClick={() => setCurrentPage(lastPage)} > <ArrowRightFromLine /> </button>
                        </div>
                        <p className={styles.totalPages}>{movieList.length} movies found, {Math.round(movieList.length / 4)} pages</p>    
                    </div>
                
            </div>
            
        </section>
    )
}

export default VerticalMovieList;