import  useNavigateToMovie  from "../components/NavigateToMovie"
import styles from './modules/components/VerticalMovieList.module.css'
import genres from "../assets/data/genres.json"
import { FilterIcon, ChevronRight, ArrowRightFromLine } from 'lucide-react'
import { Movie, Genre } from '../types/Movie'
import { useState, useEffect } from "react"
import { use } from "i18next"
import { useLocation } from "react-router-dom"

/*
    Context: VerticalMovieList.tsx is a component created for the purpose of applying a layout to a list of movie with a 
    filter system included
*/


interface MovieListProps{
    movieList: Movie[]
}

interface GenresProps{
    genres: Genre[]
}

const VerticalMovieList = ({movieList, genres}:MovieListProps & GenresProps) => {

    //We create 2 main hooks to make the filter with .filter
    //Hook to store selected filters
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    //This hook is what we are going to use to show the movies
    const [currentMovies, setCurrentMovies] = useState<Movie[]>([]);
    //Hook to control pages from the movie list
    const [currentPage, setCurrentPage] = useState(1);
    //This Hook is used for set the classes from the button that is used for the small design of the page
    const [isVisible, setIsVisible] = useState(false);

    //We use useLocation to known when the user navegates to other pages to reset the paginate system when they return to VerticalMovieList
    const location = useLocation();
    const moviesPerPage = 4

    //useNavigateToMovie is a customHook that I created to easily navigate through the pages
    let navigation = useNavigateToMovie();

    //This fuction is what we use to set the selectedFilters hook if they are checked from the boostrap checkboxes
    //This function is called when there is a change on the checkbox input and we store the element that trigger the event
    const filterMark =  (event: React.ChangeEvent<HTMLInputElement>) => {
        //We store id and the state of the checkbox from the element
        const { id , checked } = event.target;
        //We create a list, if the target check is True then We add the id to the list and if not then we remove it
        setSelectedFilters((prev) => 
            checked ? [...prev, id] : prev.filter((g) => g !== id) 
        )        
    }
 

    const handleFilter = (id: string) => { 
        if(!selectedFilters.includes(id)){
            setSelectedFilters([...selectedFilters,id])
        } else{
            setSelectedFilters(selectedFilters.filter(filterId => filterId != id))
        }
    }

    
    const lastPage = movieList.length / moviesPerPage

    //Button deactivations
    //Variables that we will use for disable option if there are no pages in left side or right of the current page
    let previousBtnDisabled = currentPage < 2;
    let nextBtnDisabled = currentPage * moviesPerPage >= movieList.length;


    useEffect(() =>{
        //We set a variable to store the original list to filter it and use it later to display in the page
        let filteredMovies = movieList
        if (selectedFilters.length > 0){
            //Each movie has a list of genre ids so  we need to access each genre of the movie to use the filter, so we use .filter and an .every
            //because we need the movie to match each genre of the selectedFilters
            filteredMovies = movieList.filter((movie) => selectedFilters.every((filter) => movie.genre_ids.includes(Number(filter))))
        } 

        //We slice the movie list to have the pagination of the movies
        filteredMovies = filteredMovies.slice(
            (currentPage - 1) * moviesPerPage, currentPage * moviesPerPage
        )

        setCurrentMovies(filteredMovies)
    },[selectedFilters, movieList, currentPage])
    
    useEffect(() =>{
        //If we go through other link pages we reset the pagination
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
                {/*topFilter is a container that have all filters like the pagination buttons and genre filter   */}
                <div className={styles.topFilter}>
                    <div className={styles.pagesContainer}>
                        {/*This is the responsive button is only visible on <= 850px width  */}
                        <div className={styles.responsiveFilterContainer}>
                            <button
                                className={`${styles.filtersBtn} ${isVisible ? styles.btnActive : ''}`}
                                onClick={() => setIsVisible(!isVisible)}>
                                    <FilterIcon color="#136e3a" strokeWidth={1.3}></FilterIcon>
                                    <p>Genres</p>
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
                        
                    </div>
                
            </div>
            
        </section>
    )
}

export default VerticalMovieList;