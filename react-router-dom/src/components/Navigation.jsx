import { Navbar, Container, Nav } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home"> People Locator</Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink to="/home" className='nav-link'> Home</NavLink>
          <NavLink to="/people" className='nav-link'> People</NavLink>
          <NavLink to="/sign-up" className='nav-link'> Sign up</NavLink>
          <NavLink to="/login" className='nav-link'> Login</NavLink>
          <NavLink to="/about" className='nav-link'> About</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation