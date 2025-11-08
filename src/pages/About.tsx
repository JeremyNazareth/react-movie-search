import '../assets/styles/global.css'
import styles from '../components/modules/pages/About.module.css'

function About(){


    return (        
        <main className='main-body'>
            <div className={styles.aboutContainer}>
                <h1>
                    About
                </h1>
                <p>
                    ¿Qué es esto?, esta es mi primer aplicación web desarrollada en react. Creada con el objetivo de
                     ampliar y adquirir más conocimientos en el ambito del front-end.
                </p>
                <p>
                    El enfoque de este proyecto fué crear un proyecto demostrativo mas que una aplicación fundamental.
                    Un desafio para demostrar mis habilidades de aprendizaje, con la creación de una aplicación web desde el cero haciendo un primer contacto
                    con el framework React.
                </p>
                <p>
                    Puntos fundamentales en los que trabajé:
                </p>
                <ul>
                    <li>Consumo de APIs REST</li>
                    <li>Gestión de estado con React Hooks</li>
                    <li>Componentes funcionales</li>
                    <li>Routing y manejo de navegación</li>
                    <li>Diseño responsive</li>
                </ul>
            </div>
            
        </main>
        
    )
}

export default About;