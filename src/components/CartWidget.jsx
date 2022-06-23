import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../context/CartContext';

function CartWidget({items}) {

  const {getItemQty} = useContext(CartContext);

  return (
      <>
    <ShoppingCartIcon />
    <span>{items}</span>
    </>  
  )
}

export default CartWidget