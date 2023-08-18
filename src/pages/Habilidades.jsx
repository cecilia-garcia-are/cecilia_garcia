import './styles/Habilidades.css'

const Habilidades = () => {
  return (
    <div className="iconos__container animated pulse">
      <h1 className='icons__title'>Mis Habilidades</h1>
      
      <div className="iconos__container">
      <div className="iconos__groups transUp">
      <img className='iconos__habilities' src="/img/html-01.svg" alt="" />
        <p className='descripcion'> Es uno de los básicos que no pueden faltar para ser un desarrollador Full Stack. 
        Es lo que me permite dar estilo.</p>
        </div>

         <div className="iconos__groups transUp">
      <img className='iconos__habilities' src="/img/js-01.svg" alt="" />
        <p className='descripcion'>Creando proyectos innovadores y hechos a la medida.  </p>
      </div>

      <div className="iconos__groups transUp">
      <img className='iconos__habilities' src="/img/css-01.svg" alt="" />
        <p className='descripcion'>Me permite darle estilo al contenido y decorar la parte más cercana al usuario, así mismo
        poder darle un diseño responsivo. </p>
      </div>

      <div className="iconos__groups transUp">
      <img className='iconos__habilities' src="/img/react-01.svg" alt="" />
        <p className='descripcion'> Dando funcionalidad dinámica, estilos unicos y personalizados. </p>
      </div>

      <div className="iconos__groups transUp">
      <img className='iconos__habilities' src="/img/node-01.svg" alt="" />
        <p className='descripcion'> Lenguaje que me permite desarrollar aplicaciones web al igual que JS, dando estilos unicos. </p>
      </div>

      </div>

    </div>
  )
}

export default Habilidades