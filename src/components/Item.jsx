
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Item({items}) {
  const {id,title,description,price,stock,pictureUrl} = items;
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
          stock:{stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${id}`}>
        <Button size="small">ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
