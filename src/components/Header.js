import NavBar from "./NavBar"
import "../styles/Header.css"
import yose from './img/yosemite.jpg'

const Header = (props) => {
  return (
    <div
      className='header-container'
      id='header'
      style={{
        backgroundImage: `url(${yose})`,
      }}
    >

      <NavBar />

      <div className='header-content'>
          <h1>
            {props.myName}
          </h1>
          <h2>
            {props.myTitle}
          </h2>
      </div>
      
    </div>
  )
}

export default Header
