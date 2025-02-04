import styles from '../components/MovieCard.module.css'

function Contacto(){
    return (        
        <div>
            <h1>Contacto</h1>
            <h2>Contacto</h2>
            <h3>Contacto</h3>
            <h4>Contacto</h4>
            <h5>Contacto</h5>
            <h6>Contacto</h6>
            <div className={styles.movieCard}>
                <img className={styles.poster} src="https://image.tmdb.org/t/p/w500/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg"/>
                <div className={styles.movieData}>
                    <h3>Sonic the Hedgehog 3</h3>
                    <h4>7.9</h4>
                </div>
            </div>
        </div>
    
    )
}

export default Contacto;