import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [resultado, setResultado] = useState([]);


  useEffect(() => {
    setLoading();
    setError();
    setResultado();

    const producto = new Promise((res,rej) => {
      setTimeout(() => {
        res([
          {id:"1",title:"camiseta Lebron James",description:"talle M",price:"2500",image:"/public/image/remera lebron.jpg"},
          {id:"2",title:"camiseta Stephen Curry",description:"talle L",price:"2600",image:"/public/image/remera nba.jpg"},
          {id:"3",title:"camiseta Tyler Herro",description:"talle M",price:"2500",image:"/public/image/herro.jpg"},
          {id:"4",title:"camiseta Nikola Jokic",description:"talle L",price:"2500",image:"/public/image/jokic.jpg"},
          {id:"5",title:"camiseta Ja Morant",description:"talle XL",price:"2500",image:"/public/image/ja morant.jpg"},
          {id:"6",title:"camiseta Luka Doncic",description:"talle L",price:"2500",image:"/public/image/camiseta doncic.jpg"},
          {id:"7",title:"camiseta Jason Tatum",description:"talle M",price:"2500",image:"/public/image/camiseta boston.jpg"},
          {id:"8",title:"camiseta Kevin Durant",description:"talle L",price:"2500",image:"/public/image/camiseta durant.jpg"},
        ]);
      },2000);
      
      
    });

    producto
    .then((result) => {
      console.log(result)
      setResultado(result);
    })
    .catch((error) =>{
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });

  }, []);

  console.log(resultado)
  
  return (
  <>
  <ItemList resultado={resultado} />
  </>
  )
}

export default ItemListContainer;