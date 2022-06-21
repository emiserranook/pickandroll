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

function App() {
return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/productos' element={<ItemListContainer/>} />
        <Route path='/' element={<Contacto/>} />
        <Route path='/item/:idProd' element={<ItemDetailContainer />}
        <Route path='/cart' element={ <Cart/> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
