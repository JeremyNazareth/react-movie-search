import style from '../components/modules/MovieDetails.module.css'
import { useParams } from 'react-router-dom'
import movieDetails from '../assets/data/movieDetails.json'
import { useEffect, useState } from 'react';


const MovieDetails = () => {

    const {id} = useParams();
    const movie = movieDetails.find((movieData) => movieData.id.toString() === id)
    

    useEffect (() =>{
        const mainDetails = document.getElementById('mainDetails');
        mainDetails.style.background =
        `linear-gradient(to right,rgb(40, 94, 49) 30%,rgba(0,0,0,0.1) 70%),
        
        linear-gradient(to left,rgba(40, 94, 49),rgba(0,0,0,0)),
        url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`;
        mainDetails.style.backgroundRepeat = 'no-repeat';
        mainDetails.style.backgroundPosition = '180% 0%';
        mainDetails.style.backgroundColor = 'black';
        console.log(`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`)
    },[movie]);
    
    
    return(
        <div className='app-content'>
            <div className={style.test}>
                <div id='mainDetails' className={style.mainDetails}>
                
                </div>
                
                
            </div>
        </div>
        
    )
}

export default MovieDetails