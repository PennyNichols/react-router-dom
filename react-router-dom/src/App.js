import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/'element={<h1>Home Page</h1>}/>
        <Route path='/about' element={<h1>About Page</h1>}/>
        <Route path='/contact' element={<h1>Contact Page</h1>}/>
        <Route path='*' element={<h1>404 : Page Not Found :(</h1>}/>
      </Routes>
    </>
	);
}

export default App;
