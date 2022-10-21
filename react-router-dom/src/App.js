import Navigation from "./components/Navigation"; 
import { Routes, Route } from 'react-router-dom'

import {Home, About, People, Login, SignUp, NotFound} from './pages'

const App = () => {
  return (
  
    <>
      <Navigation />

      <Routes>
        <Route path="/Home" element={ <Home /> } />
        <Route path="/about" element={<About/> } />
        <Route path="/login" element={<Login/> } />
        <Route path="/sign-up" element={<SignUp/> } />
        <Route path="/people" element={ <People /> } />
        <Route path="*" element={ <NotFound /> } />
        
      </Routes>

    </>
     )
}

export default App