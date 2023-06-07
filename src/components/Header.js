import NavBar from "./NavBar"
import "../styles/Header.css"
import yose from './img/yosemite.jpg'
import { useState } from "react"

const Header = (props) => {

  const [btnName, setBtnName] = useState('Hide Content');
  const [visState, setVisState] = useState('visible');
  const minHeader = () => {
    if (btnName === 'Hide Content') {
      setVisState('hidden')
      setBtnName('Show Content')  
    } else {
      setVisState('visible')
      setBtnName('Hide Content')  
    }
  }

  return (
    <div
      className='header-container'
      id='header'
      style={{
        backgroundImage: `url(${yose})`,
      }}
    >

      <NavBar />

      <div
        className='header-content'
        style={{visibility: `${visState}`}}
      >
          <h1>
            {props.myName}
          </h1>
          <h2>
            {props.myTitle}
          </h2>
      </div>

      <button
        className='min-header-btn'
        onClick={minHeader}
      >
        {btnName}
      </button>

    </div>
  )
}

export default Header
