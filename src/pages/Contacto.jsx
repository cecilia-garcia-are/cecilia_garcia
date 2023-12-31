import './styles/Contacto.css'

const Contacto = () => {

  const handleGitHub = () => {
    window.open('https://github.com/cecilia-garcia-are')
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/cecilia-garcia20/')
  }

  const handleBehance = () => {
    window.open('https://www.behance.net/ceciliagarcia47')
  }

 
  return (
    <div className="contacto__container animated zoomIn">
      <h1 className="contacto__title">Contactame</h1>
     
     <div className='contacto__group'>

      <div className='contacto__items'>
      <span className='parrafo__contact'> <i className='bx bx-envelope bx-sm' > </i> 
      <a href="mailto:fany_garcia13@hotmail.com">fany_garcia13@hotmail.com</a> </span>
      <span className='parrafo__contact'> <i className='bx bx-phone bx-sm'></i><a href=" https://wa.me/525570115022">+52 55 7011 5022</a></span>
      </div>

      <div className='contacto__redes'>
      <span className='red__icon transUp' onClick={handleGitHub}><i className='bx bxl-github bx-md'></i> </span>
      <span className='red__icon transUp' onClick={handleLinkedIn}> <i className='bx bxl-linkedin-square bx-md' ></i> </span>
      <span className='red__icon transUp' onClick={handleBehance}><i class='bx bxl-behance bx-md' ></i></span>
      </div>
       
      <div className='cv__container'>
      <a className='descarga__cv' href="/pdf/Curriculum_Cecilia_Garcia.pdf" download='Curriculum_Cecilia_Garcia.pdf'>Descargar CV</a>
      </div>

      </div>
    </div>
  )
}

export default Contacto