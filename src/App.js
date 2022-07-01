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
import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout';

const firebaseConfig = {
  apiKey: "AIzaSyD4m2hQS0uDtryplEgQ4zPjzydRhi7ySbw",
  authDomain: "pickandroll-e-commerce.firebaseapp.com",
  projectId: "pickandroll-e-commerce",
  storageBucket: "pickandroll-e-commerce.appspot.com",
  messagingSenderId: "78755443103",
  appId: "1:78755443103:web:2ffa59102be3aebec8cdaa"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
return (
    <>
    <BrowserRouter>
    <MyProvider>
    <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='category/:id' element={<ItemListContainer />} />s
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </MyProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
