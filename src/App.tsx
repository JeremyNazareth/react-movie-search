import { useState } from 'react'
import Header from "./components/Header"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <h1 style={{color: "#2E8B57"}}>Movie Search</h1>
        <h4>¡Bienvenido!, aquí podras encontrar tus peliculas preferidas.</h4>
      </div>
    </>
  )
}

export default App
