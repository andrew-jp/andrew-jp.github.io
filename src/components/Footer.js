import climbing from './img/climbing.jpeg'
import '../styles/Footer.css'

const Footer = () => {
  const scrollTo = (ref) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  
  return (
    <footer
      className="content"
      id="footer"
      ref={scrollTo}
      style={{
        backgroundImage: `url(${climbing})`,
      }}>
      <div id='footer-content'>
        <a
          className="link"
          href="https://www.linkedin.com/in/andrew-james-pritchett/"
          target="_blank"
          rel="noopener noreferrer">
            LinkedIn
        </a>
        <a
          className="link"
          href="https://github.com/andrew-jp"
          target="_blank"
          rel="noopener noreferrer">
            GitHub
        </a>
        <p className='footer-cr'>Copyright 2023 ©</p>
      </div>
    </footer>

  )
}

export default Footer
