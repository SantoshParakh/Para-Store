import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
    <Router>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/productcard' element={<ProductCard/>} /> */}
      </Routes>
        <Footer/>
    </Router>

    </>
  )
}

export default App
