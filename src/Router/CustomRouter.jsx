import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home"
import Register from "../Pages/Register"
import Catalog from "../Pages/Catalog"
import Product from '../Pages/Product';
import ContactUs from '../Pages/ContactUs';
import ShoppingCart from '../Pages/ShoppingCart';

function CustomRouter() {
  const localuser = JSON.parse(localStorage.getItem('authUser'))

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={localuser ? <Home/>:<Register />}/>
        <Route path="Catalog/:id" element={localuser ? <Catalog/>:<Register />}/>
        <Route path="Product/:id" element={localuser ? <Product/>:<Register />}/>
        <Route path="ContactUs" element={localuser ? <ContactUs/>:<Register />}/>
        <Route path="/Cart" element={localuser ? <ShoppingCart/>:<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default CustomRouter