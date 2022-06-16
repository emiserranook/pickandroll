import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contacto from './components/Contacto';

function App() {
  const [count, setCount] = useState(1)
  const onAdd = (count) => {
    alert(`sumaste ${count} productos`);
  }

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <ItemCount inicial={1} max={10} onAdd={onAdd} />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/productos' element={<ItemListContainer/>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
