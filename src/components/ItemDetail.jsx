
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

export default function ItemDetail({productDetail}) {
  const{id,title,description,precio,image} = productDetail;
  const [count, setCount] = useState(0);

  function onAdd () {
    alert(`sumaste ${count} productos`);
  }

  const removeFromCart = () => {
    removeItem(id);
    setAddedToCart(false);
  }

  
  return (
    <Card sx={{ width:"310px",margin: 10 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          title:{title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          description:{description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          precio:{precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Id:{id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ver detalle</Button>
      </CardActions>
      <div>
        {count > 0 ?<Link to {'/cart'}>terminar mi compra</Link>:<ItemCount inicial={1} max={10} onAdd={onAdd} removeFromCart={ removeFromCart }/>}
    </div>
    </Card>
  );
}