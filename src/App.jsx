import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './static/App.css'
import ProductList from './components/ProductList'
import Home from './components/Home';
import Basket from './components/Basket'
import NavBar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import ProductDetails from './components/ProductDetails';


function App() {

  const productItems = [
    {id: 1, name: "MacBook Pro", price: 1500},
    {id: 2, name: "Playstation 5", price: 500},
    {id: 3, name: "iPhone 15", price: 1000}
]

  const [basket, setBasket] = useState([])

  const addProductToBasket = (product) => {
    setBasket([...basket, product ])
  }

  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="products/" element={< ProductList products={productItems} addProductToBasket={addProductToBasket}/>} />
      <Route path="/basket" element={<Basket basket={basket}/>} />
      <Route path="products/:productID" element={<ProductDetails products={productItems}/>} />
      <Route path="*" element={ <ErrorPage />} />
    </Routes>
  </Router>
  );
}

export default App
