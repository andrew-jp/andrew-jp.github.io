import NavBar from "./NavBar"
import yose from './img/yosemite.jpg'
import "../styles/Header.css"

const Header = () => {
  return (
    <div
      className='content'
      id='header'
      style={{
        backgroundImage: `url(${yose})`,
      }}>
      <NavBar />
      <div className='header-content'>
          <h1>
            Andrew Pritchett
          </h1>
          <h3>
            Software Engineer
          </h3>
      </div>
    </div>
  )
}

export default Header
