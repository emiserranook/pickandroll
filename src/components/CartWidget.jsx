import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const {getItemQty} = useContext(CartContext);

export default function CustomizedBadges() {
  return (
    <Link to="/cart">
      {getItemQty() > 0?
    <IconButton aria-label="cart">
        <spam>{getItemQty()}</spam>
    </IconButton>
    :
    null
    }
    </Link>
  );
}
