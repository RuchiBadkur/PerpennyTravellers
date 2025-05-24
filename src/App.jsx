import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import PopularDestinations from './pages/PopularDestinations'
import Services from './pages/Services'
import Footer from './pages/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
    <BrowserRouter>
      <Navbar />
      <div className="flex-grow">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/explore' element={<PopularDestinations/>} />
        <Route path='/about' element={<Services/>} />
        <Route path='/contact' element={<Footer/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
