import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1)
  const onAdd = (count) => {
    alert(`sumaste ${count} productos`);
  }

  return (
    <>
    <Navbar />
    <ItemListContainer greeting ={"hola coder house"} />
    <ItemCount inicial={1} max={10} onAdd={onAdd} />
    </>
  );
}

export default App;
