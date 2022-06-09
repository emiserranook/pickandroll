import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [resultado, setResultado] = useState([]):


  useEffect(() => {
    setLoading();
    setError();
    setResultado();

    const producto = new Promise((res,rej) => {
      setTimeout(() => {
        res([
          {id:1,title:"camiseta dallas",description:"talle M",precio:"2500"},
          {id:2,title:"camiseta golden state",description:"talle L",precio:"2600"},
          {id:3,itle:"camiseta lakers",description:"talle M",precio:"2500"},
          {id:4,title:"camiseta lakers",description:"talle L",precio:"2500"},
        ]);
      },2000);
      
      
    });

    producto
    .then((result) => {
      setResultado(result);
    })
    .catch((error) =>{
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    }):

  }, []);

  console.log(productos)
  



  return (
  <>
  <div>{loading && "loading..."}</div>
  <div>{error && "hubo un error en el servidor"}</div>
  <div>
    {resultado && resultado.map((item) => (
      <>
      <p>id:{item.id}</p>
      <p>title:{item.title}</p>
      <p>description:{item.description}</p>
      <p>precio:{item.precio}</p>
      </>
    ))}
  </div>
    <ItemList resultado={resultado} />
  </>
  )
}

export default ItemListContainer;