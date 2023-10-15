import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './static/App.css'
import ProductList from './components/ProductList'
import Home from './components/Home';
import Basket from './components/Basket'
import NavBar from './components/Navbar';
import ErrorPage from './components/ErrorPage';

function App() {

  const productItems = [
    {name: "MacBook Pro", price: 1500},
    {name: "Playstation 5", price: 500},
    {name: "iPhone 15", price: 1000}
]

  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="products/" element={< ProductList products={productItems}/>} />
      <Route path="/basket" element={<Basket />} />
      <Route path="*" element={ <ErrorPage />} />
    </Routes>
  </Router>
  );
}

export default App
