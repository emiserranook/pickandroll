
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Item({Item}) {
  const {id,title,description,precio,image} = Item;
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
        <Link to={`Item/${id}`}>
        <Button size="small">ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
