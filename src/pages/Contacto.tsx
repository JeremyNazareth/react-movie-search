import { Search } from 'lucide-react';
import '../assets/styles/global.css'



function Contacto(){

    let test = () =>{
        console.log("Hola")
    }

    return (        
        <main className='app-content'>
            <h1>Contacto</h1>
            <button onClick={test}><Search></Search></button>
        </main>
    )
}

export default Contacto;