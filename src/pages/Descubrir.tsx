import VerticalMovieList from '../components/VerticalMovieList'
import movies from '../assets/data/movies.json'
import genres from '../assets/data/genres.json'


function Descubrir(){
    return (
        <main className='app-content'>
            <VerticalMovieList movieList={movies} genres={genres} ></VerticalMovieList>
        </main>  
    );
}

export default Descubrir;