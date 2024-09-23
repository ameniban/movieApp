
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {

  return (
    <div className=''> 
    
   
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/movies' element={ <Movies />} />
      <Route path='/movie-details/:id' element={ <Details />} />
      <Route path='*' element={ <Navigate to="/" />} />

     
    </Routes>
    </BrowserRouter>
     </div>
  )
}

export default App
