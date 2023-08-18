import { Link } from 'react-router-dom'
import './styles/Inicio.css'

const Inicio = () => {

  return (


    <div className='home__title'>
    
    <div>
   <h1 className='title__one animated pulse'>HOLA SOY CECILIA GARCIA</h1>
   <h3 className='description__home animated zoomIn'>Diseñadora gráfico y desarrolladora Full-Stack</h3>
   </div>  
  
   <div className='enlace__btn animated zoomIn'>
   <span className='enlace'> 
        <Link to={'/proyectos'}>Mis Proyectos</Link>
        </span>

  <span className='enlace__contact'> 
        <Link to={'/contacto'}>Contacto</Link>
        </span>    
        </div>
</div>
  )
}

export default Inicio