import { Link } from "react-router-dom"
import './styles/Navbar.css'
import { useState } from "react"


const Navbar = () => {

  const [isOpen, setIsOpen ] = useState(false)
  
  return (
    <div className='nav__container'>
      
      <div className="nav__logo">
      <Link to={'/'}> <img src="public/img/firma.svg" alt="" /></Link> </div>
 
    <div className={ `nav__group ${isOpen && "open"}`}>

     <span className='nav__component'>
         <Link to={'/sobremi'} >Sobre Mi</Link>
         </span>
      <span className='nav__component'> 
        <Link to={'/proyectos'}>Proyectos</Link>
        </span>
      <span className='nav__component'> 
        <Link to={'/habilidades'}>Habilidades</Link>
        </span>
      <span className='nav__component'> 
        <Link to={'/contacto'}>Contacto</Link>
        </span>
    </div>

    <div className={`nav__toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    
    
    
</div>
  )
}

export default Navbar