
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ItemDetail({producto}) {
  const{id,title,description,price,image} = producto;

  const [count, setCount] = useState(true);

  const [AddedToCart, setAddedToCart] = useState (1);

  const{isInCart, addItem} = useContext(CartContext)


  const onAdd = (AddedToCart) => {
    isInCart(producto.id);
    addItem(producto, AddedToCart);
    setCount(false);
  };

  const removeFromCart = () => {
    removeItem(id);
    setAddedToCart(false);
  }
const removeItem = (id) => {
  setAddedToCart(true);
};
  
  return (
    <Card sx={{ width:"310px",margin: 10 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          title:{title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          description:{description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          precio:{price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Id:{id}
        </Typography>
      </CardContent>
      {count > 0 ?(
        <ItemCount id={id} 
        AddedToCart={AddedToCart} 
        setAddedToCart={setAddedToCart}
        onAdd={onAdd}
        />
      ) : (
      <div>
        <button type='button'>
        <Link to = {'/productos'}>seguir comprando</Link>
        </button>
        <button type='button'>
        <Link to = {'/cart'}>Ir al carrito</Link>
        </button>
    </div>
      )}
    </Card>
  );
}