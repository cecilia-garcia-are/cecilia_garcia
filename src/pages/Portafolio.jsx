import './styles/Portafolio.css'

const Portafolio = () => {

  const handleClima = () => {
    window.open('https://app-clima-cg.netlify.app/')
  }

  const handleSuerte = () => {
    window.open('https://galletadelasuerte-cg-p1react.netlify.app/')
  }

  const handleApiRM = () => {
    window.open('https://app-rick-and-morty-cg.netlify.app')
  }

  const handleUsers = () => {
    window.open('https://usuarios-cg.netlify.app')
  }

  const handlePoke = () => {
    window.open('https://pokeapi-cg.netlify.app')
  }

  const handleECommerce= () => {
    window.open('https://e-commerce-api-cg.netlify.app')
  }


  return (
    <div className='proy__container animated pulse'>

      
      <h2 className='proy__title'>Mis proyectos en react</h2>
      
      <div className='proy__container'>
      
      <div className='proy__group transUp'>
      <h2 className='title__app'>Galleta de la Fortuna</h2>
      <img className='icon__api' src="/img/iconogalleta.png" alt="" />
        <p className='descripcion_p'> "Te acompañará en tu día a día para que consultes tu suerte, 
        siempre que la necesites." </p>
        <button className='button__app' onClick={handleSuerte} >Ir a la app</button>
      </div>

      <div className='proy__group transUp'>
        <h2 className='title__app'>App Clima</h2>
        <img className='icon__api' src="/img/iconclima.svg" alt="" />

        <p className='descripcion_p'>"Aplicación meteorológica que brinda información en tiempo  
        real del lugar donde se encuentra"</p>

        <button className='button__app' onClick={handleClima} >Ir a la app</button>
      </div>

      <div className='proy__group transUp'>
        <h2 className='title__app'>Rick and Morty</h2>
        <img className='icon__api' src="/img/rick.png" alt="" />

        <p className='descripcion_p'>"App lista para explorar los viajes espaciales del cientifico Rick Sanchez y su nieto Morty" </p>
        <button className='button__app' onClick={handleApiRM} >Ir a la app</button>
      </div>

      <div className='proy__group transUp'>
        <h2 className='title__app'>App de Usuarios</h2>
        <img className='icon__api' src="/img/icon-users.png" alt="" />

        <p className='descripcion_p'>"Esta aplicación esta lista para la gestion y optimización para la información de todos sus usuarios"</p>
        <button className='button__app' onClick={handleUsers} >Ir a la app</button>
      </div>

      <div className='proy__group transUp'>
        <h2 className='title__app'>Pokedex</h2>
        <img className='icon__api' src="/img/poke.png" alt="" />

        <p className='descripcion_p'>"Si eres fan de Pokemon, esta app es la indicada para ti, podrás tener acceso a la 
        busqueda de todos los pokemones"</p>
        <button className='button__app' onClick={handlePoke} >Ir a la app</button>
      </div >

      <div className='proy__group transUp'>
        <h2 className='title__app'>E-commerce</h2>
        <img className='icon__api' src="/img/carrito-01.svg" alt="" />

        <p className='descripcion_p'>"Descubre nuestra app donde podras comprar sin necesidad de salir de tu casa"</p>
        <button className='button__app' onClick={handleECommerce} >Ir a la app</button>
      </div>

      </div>
    </div>
  )
}

export default Portafolio