import { Navbar, Container, Nav } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home"> People Locator</Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink to="/home"> Home</NavLink>
          <NavLink to="/people"> People</NavLink>
          <NavLink to="/sign-up"> Sign up</NavLink>
          <NavLink to="/login"> Login</NavLink>
          <NavLink to="/about"> About</NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation