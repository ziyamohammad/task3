
import './App.css';
import React from 'react'
import NavBar from './component/NavBar';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Categories from './component/Categories';
import LoginSignup from './component/LoginSignup';
import Cart from './component/Cart';
import Shop from './component/Shop';
import Product from './component/Product';
import Ziya from './component/Ziya';
import Categoryitem from './component/Categoryitem';
import Login from './component/Login';



const App=()=>{
  return (
  <div className="wholes">
      <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/Products" element={<Product />} />
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="/Categoryitem/:name" element={<Categoryitem/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Ziya/:id" element={<Ziya/>}/>
        <Route path="/products/:id" element={<Ziya/>}/>
        <Route path="/LoginSignup" element={<LoginSignup/>}/>
       
      </Routes>
      </Router>
    </div>
  );
}

  export default App


      
     