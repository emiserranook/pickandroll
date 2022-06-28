import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget({items}) {

  const {getItemQty} = useContext(CartContext);

  return (
      <>
    <Link to="/cart"><ShoppingCartIcon />
    {getItemQty() > 0 ?
            <Badge>{getItemQty()}</Badge>
          : 
          null}
    </Link>
    <span>{items}</span>
    </>  

  )
}

export default CartWidget;