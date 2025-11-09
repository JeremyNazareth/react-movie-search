import VerticalMovieList from '../components/VerticalMovieList'
import movies from '../assets/data/movies.json'
import genres from '../assets/data/genres.json'
function Discover(){

    return (
        <main className='main-body'>
            <VerticalMovieList movieList={movies} genres={genres} ></VerticalMovieList>
        </main>  
    );
}

export default Discover;