import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contacto from './components/Contacto';
import Item from './components/Item';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import MyProvider from './context/CartContext';

function App() {
return (
    <>
    <BrowserRouter>
    <MyProvider>
    <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/productos/:idCateg' element={<ItemListContainer />} />s
        <Route path='/' element={<Contacto />} />
        <Route path='/item/:idProd' element={<ItemDetailContainer />} />
        <Route path='/cart' element={ <Cart/> } />
      </Routes>
      </MyProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
