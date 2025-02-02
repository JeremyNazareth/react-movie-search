import movieData from '../assets/data/movie.json';




function Inicio(){
    return(
        <div>
            <h1 style={{color: "#2E8B57"}}>Movie Search</h1>
            <h4>¡Bienvenido!, aquí podras encontrar la calificación de tus peliculas preferidas.</h4>

            <div>
            {movieData.map(movie => (
                <div key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" style={{ width: '200px', height: '300px' }} />
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <p>{movie.vote_average}</p>
                    {/* Agrega más detalles según lo necesites */}
                </div>
            ))}
        </div>
        </div>
        
    )
}

export default Inicio