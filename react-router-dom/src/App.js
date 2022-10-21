import Navigation from "./components/Navigation"; 
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';

import {Home, About, People, Login, SignUp, NotFound} from './pages'

const App = () => {
  return (
  
    <>
      <Navigation />

      <Container>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/sign-up" element={ <SignUp /> } />
          <Route path="/people" element={ <People /> } />
          <Route path="*" element={ <NotFound /> } />

        </Routes>

      </Container>

    </>
     )
}

export default App