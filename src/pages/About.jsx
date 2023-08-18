import './styles/About.css'

const About = () => {

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

    <div className="about__container animated zoomIn">

    <div className='about__group'>
      <h1 className="about__saludo">Acerca de mí</h1>
       
        <h3 className="about__info">Diseñadora Gráfico y Full-Stack</h3>

      <p className="about__description">Actualmente trabajo como diseñadora independiente, a su vez soy estudiante
      de Full-Stack en  Academlo. 
        Soy una persona que tiene tanto un lado creativo como lógico. 
        Cuando descubri el diseño web me di cuenta de que encajaría perfecto conmigo, puedo usar mi lado creativo para diseñar y 
        dar estilo y mi lado lógico para programar. Ser diseñadora y programadora me permiteasegurarme de que no se pierda ningun 
        detalle al momento de plasmar las ideas. Cada día estoy en busca de mi mejor versión y crecimiento profesional, mi objetivo
        es aprovechar y poner en práctica cada una de mis habilidades para la creación de proyectos, asi mismo seguir aprendiendo más
        de las distintas disciplinas que la industria nos ofrece.
      </p>
      </div>

      <img className='about__img' src="/img/about-icon-01.svg" alt="" />

      <div className='redes'>
      <span className='icon__r transUp' onClick={handleGitHub}><i className='bx bxl-github bx-md'></i> </span>
      <span className='icon__r transUp' onClick={handleLinkedIn}> <i className='bx bxl-linkedin-square bx-md' ></i> </span>
      <span className='icon__r transUp' onClick={handleBehance}><i class='bx bxl-behance bx-md' ></i></span>
      </div>

    </div>
  )
}

export default About