
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pages/Inicio'
import About from './pages/About'
import Portafolio from './pages/Portafolio'
import Habilidades from './pages/Habilidades'
import Contacto from './pages/Contacto'
import Navbar from './components/shared/Navbar'
import IsDarkMode from './components/IsDarkMode'




function App() {

  const [darkMode, setDarkMode] = IsDarkMode() //llamada de mi componente

  //DARK MODE
  const handleToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }

  return (

       <div>
       <div className='group__dark'>
      <input className='switch' type="checkbox" 
       id="switch"
        defaultChecked={!darkMode} 
        onChange={handleToggleDarkMode}
        />
        <label className='mov' for="switch">Toggle</label>
        </div>
       <Navbar/>
      <Routes>
        <Route path='/' element={ <Inicio/>} />
        <Route path='/sobremi' element={<About/>}/>
        <Route path='/proyectos' element={<Portafolio/>}/>
        <Route path='/habilidades' element={<Habilidades/>} />
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
      
       
    </div>
    
  )
}

export default App
