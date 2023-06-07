import Button from "./Button"
import "../styles/Navbar.css"

const NavBar = () => {
  return (
    <div className='navbar'>
      <a id="aboutBtn" href='#about'>
        <Button text='About' />
      </a>
      <a id="skillsButton" href='#skills'>
        <Button text='Skills' />
      </a>
      <a id="contactBtn" href='#footer'>
        <Button text='Contact' />
      </a>
    </div>
  )
}

export default NavBar
