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
          {id:"1",title:"camiseta dallas",description:"talle M",price:"2500",image:"/public/image/remera lebron.jpg"},
          {id:"2",title:"camiseta golden state",description:"talle L",price:"2600",image:"/public/image/remera nba.jpg"},
          {id:"3",title:"camiseta lakers",description:"talle M",price:"2500",image:"/public/image/herro.jpg"},
          {id:"4",title:"camiseta lakers",description:"talle L",price:"2500",image:"/public/image/jokic.jpg"},
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