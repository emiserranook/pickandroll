
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
  const{category_id,title,description,price,stock, pictureUrl} = producto;

  const [count, setCount] = useState(1);

  const [cant, setCant] = useState (0);

  const{isInCart, addItem} = useContext(CartContext)

const sumar = () => {
  count < stock ? setCount (count + 1) : alert('no hay suficiente stock')
}

const restar = () =>{
  count > 1 ? setCount (count - 1) : alert ('la cantidad no puede ser menor que 1')
}

const reset = () =>{
  setCount(1)
}

const agregar = (count) => {
  if (count ===1) {
    alert(`se agrego ${title} al carrito`)
    } else {
    alert(`se agrego ${count} ${title} al carrito`)
  }
  setCant (count);
  addItem(producto, count)
  isInCart(producto.id);
}
  
  return (
    
    <Card sx={{ width:"310px",margin: 10 }}>
      <CardMedia
        component="img"
        height="300"
        src={pictureUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          descripcion:{description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          precio:${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          categoria:{category_id} - stock:{stock}
        </Typography>
      </CardContent>
      <CardActions>
     
              {cant > 0 ? 
              <>
                <Link to={'/'}> <Button size="small">Seguir comprando</Button></Link>
                <Link to={'/cart'}><Button size="small">Terminar mi compra</Button></Link>
                </>
                 : 
                <ItemCount stock={stock} initial={1} onAdd={agregar} sumar={sumar} restar={restar} reset={reset} count={count} />
                }
            
            </CardActions>
    </Card>
  );
}