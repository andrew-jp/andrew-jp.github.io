import Button from "./Button"

const NavBar = () => {
  return (
    <div className='navbar'>
      <a id="aboutBtn" href='#about'>
        <Button text='About' />
      </a>
      <a id="contactBtn" href='#footer'>
        <Button text='Contact' />
      </a>
    </div>
  )
}

export default NavBar
