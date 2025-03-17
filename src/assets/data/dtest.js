let movies = [
    {
        id: "3",
        name: "hola3",
    },
    {
        id: "4",
        name: "hola4",
    },
    {
        id: "5",
        name: "hola5",
    }
]

const catchIds = (movies) =>{
    let moviesId = movies.map((movie)=> 
        movie.id
    )
    console.log(moviesId)    
}

catchIds(movies);


