import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/products/Products';
import './index.css'; 
import Home from './components/home/Home';
import Navbar from './components/shared/Navbar';


function App() {


  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
  </Router>
  )
}

export default App
