import logo from './logo.svg';
import './App.css';
import { Routes,Route,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import ProductDesc from './pages/ProductDesc';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/login' element={<Navigate to='/products'/>}></Route>
      <Route path='/products' element={<Products/>} >
        <Route path=':productId' element={<ProductDesc/>}>
        </Route>
        
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
