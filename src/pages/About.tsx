import '../assets/styles/global.css'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import styles from '../components/modules/pages/About.module.css'
import context from 'react-bootstrap/esm/AccordionContext'
function About(){

    

    return (        
        <main className='main-body' style={{alignItems:"start", width:"66%"}}>
            <h1>About</h1>

            <Tabs
            defaultActiveKey="context"
            >
                <Tab eventKey="context" title="Contexto">
                    <div className={styles.tabText}>
                        <p>
                            Movie-Search es una aplicación web creada con React que permite buscar información sobre películas de manera rápida y sencilla.
                             Utiliza la API de TMDB <a href="https://developer.themoviedb.org/docs/faq">developer.themoviedb.org</a> para obtener todos los datos de las películas, como el título, la sinopsis, el año de estreno y el póster.
                        </p>

                        <p>
                            Este proyecto solo tiene fines demostrativos de habilidad técnica, por lo que no tiene intención de uso comercial.
                        </p>        

                        <p>
                            A pesar de mi inexperiencia con React, decidí realizar este primer proyecto aplicando la mayor cantidad de buenas prácticas que consideré viables.
                        </p>
                    </div>
                </Tab>

                <Tab eventKey="technologies" title="Tecnologías">
                    <div className={styles.tabText}>
                        <p>
                            En este proyecto se han utilizado una varieda de Tecnologías para facilitar el desarrollo de este,
                            a continuación se enumeraran las más importantes y su uso:
                            <ul>
                                <li>React + Vite, HTML5, CSS (Funcionamiento principal de la página)</li>
                                <li>JS(Se usa solo para descargar en primera instancia y después actualizar la fuente de datos de la página)</li>
                                <li>API de TMDB (Todos los datos de las peliculas son restacadas de su API)</li>
                                <li>Module CSS (Se usó para facilitar el mantenimiento del CSS del proyecto)</li>
                                <li>React Router (Todo el sistema de navegación fué realizado en base a las Routes, para no realizar cargas de contenido innecesario)</li>
                                <li>Bootstrap (Para la implementación de botones, cards y otros tipos de interfaces)</li>
                                <li>React Slick (Librería para facilitar la implementación de los Sliders)</li>
                                <li>Lucide-icons(Librería para usar icons de una manera más mantenible)</li>

                            </ul>
                        </p>
                    </div>
                </Tab>
                <Tab eventKey="logic" title="Lógica">
                    <div className={styles.tabText}>
                        <p>
                            La página se programó basada en compontentes reutilizables, junto a otras técnicas para la ejecución del proyecto:
                            <ul>
                                <li>Los datos de las peliculas son descargados mediante JS con el uso de fetch's, desarrollé 1 script js para cada categoría
                                    necesaria para los datos de las péliculas (popularMovies, topRatedMovies, movieDetails, distribution, genres... etc.), gracias
                                    a la API de TMDB solo necesité hacer el query mediante el fetch respectivo y luego los datos son almacenados en un .json para su uso posterior.
                                    <p>
                                    Hice un script general(updateData.js) en que ejectuta cada función de todos los fetch que estan en los scripts que descargan la data para actualizar toda la fuente de datos de manera escalable.
                                    </p>
                                </li>
                                <li>
                                    Para la sección de filtros de generos decidí crear una función especial que se encarga de devolver solo las peliculas que contienen generos que coincidan con los filtros seleccionados, si hay solo 1 filtro que no coincida con los filtros seleccionados, no entra en el array de salida. Realicé esta función especial debido a que los metodos .every .some no eran suficientes para mantener un sistema de generos viable.
                                </li>
                                <li>
                                    Los datos de las peliculas ya están de forma local en la página, mientras que todas las imagenes son solicitadas a la API de TMDB.
                                </li>
                                <li>
                                    Se ocupa el localStorage solo para el sistema de favoritos, al guardar una pelicula a favoritos se almacena en la lista, que esta misma se usa para setear el estado inicial de la pelicula en los detalles de peliculas e indicar si ya está en favoritos.
                                </li>
                            </ul>
                        </p>
                    </div>
                </Tab>
                    
                <Tab eventKey="design" title="Diseño"></Tab>
                
            </Tabs>
        </main>
    )
}

export default About;