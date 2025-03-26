import { useState } from "react"
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { Movie } from '../types/Movie'

interface MovieProps{
    movies: Movie[]
}

export function SearchBar({movies}:MovieProps){
    
    const [ search, setSearch] = useState("");
    let moviesSearch = []
    let navigate = useNavigate()

    const searcher = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toLowerCase())
    }

    const navigating = (id: string) => {
        navigate(`/movie/${id}`);
        console.log(typeof(id) + ":" +id)
    }

    const searchNavigate = () => {
    
        navigate(`/search/${search}`)
    }
    
    const enter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            searchNavigate()
        }
        
    }

    if(search){
        moviesSearch = movies.filter((movie) =>
            movie.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
        if(!moviesSearch){

        }
    } else{
        moviesSearch = movies
    }

    return(
        <div className='dropdown searcher'>
            <div className="input-group mb3 dropdown-toggle" data-bs-toggle="dropdown">
                <input className="form-control search-input" onChange={searcher} onKeyDown={enter} type="text" value={search}/>
                <button className="input-group-text search-btn" onClick={searchNavigate}> <Search></Search> </button>
            </div>
            <ul className="dropdown-menu">
                { moviesSearch.length === 0 ?(
                    <p style={{paddingLeft:10, fontSize:16, color:"black", fontWeight:600}}>Sin resultados</p>
                ) : (
                    moviesSearch.map((movie) =>(
                        <li key={movie.id} onClick={() => navigating(movie.id.toString())}>{movie.title}</li>
                    )))}
            </ul>
            
        </div>
    )
}

export default SearchBar