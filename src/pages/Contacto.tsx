import styles from '../components/SearchBar.module.css'
import movies from '../assets/data/movies.json'
import SearchBar from '../components/SearchBar'
import '../assets/styles/global.css'

function Contacto(){
    return (        
        <div className='app-content'>
            <SearchBar movies={movies}></SearchBar>
        </div>
    )
}

export default Contacto;