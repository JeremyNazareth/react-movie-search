import { Search } from 'lucide-react';
import '../assets/styles/global.css'



function Contacto(){

    let test = () =>{
        console.log("Hola")
    }

    return (        
        <div className='app-content'>
            <h1>Contacto</h1>
            <button onClick={test}><Search></Search></button>
        </div>
    )
}

export default Contacto;