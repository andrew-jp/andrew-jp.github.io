import climbing from './img/climbing.jpeg'
import '../styles/Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {  
  return (
    <div
      className="footer-container"
      id="footer"
      style={{
        backgroundImage: `url(${climbing})`,
      }}>
      <div className='footer-content'>
        <a
          className="link"
          href="https://www.linkedin.com/in/andrew-james-pritchett/"
          target="_blank"
          rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a
          className="link"
          href="https://github.com/andrew-jp"
          target="_blank"
          rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a
          className="link"
          href="https://www.instagram.com/aj_pritchett/"
          target="_blank"
          rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a
          className="link"
          href="https://www.facebook.com/Ajpritchett"
          target="_blank"
          rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        
        <p className='footer-cr'>Copyright 2023 ©</p>

      </div>
    </div>

  )
}

export default Footer
