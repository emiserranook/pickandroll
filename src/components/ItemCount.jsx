import { useState } from 'react';
import { Box, Button, Fab, Typography } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export default function ItemCount({ stock ,onAdd ,sumar ,restar ,reset ,count }) {

  const [cart, addTocard] = useContext(CartContext);

  return (
    <div className="cajita">
    <div className="botones">
        <button className="botonPrincipal" onClick={restar}>-</button>
        <p className="item-count">{ count }</p>
        <button className="botonPrincipal" onClick={sumar}>+</button>
    </div>
    <div className="agregar">
        <button className="botonPrincipal" onClick={() => {onAdd(count); reset()}}>Agregar</button>
    </div>
</div>
  )
}
