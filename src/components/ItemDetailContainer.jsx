import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import CircularProgress from '@mui/material/CircularProgress';



function ItemDetailContainer() {
const[loading,setLoading] = useState(true);
const[error,setError] = useState(false);
const[ producto, setProducto] = useState(null);
const{ id} = useParams();

useEffect(() => {
  const db = getFirestore();

  const productRef = doc(db,'items', id);

  getDoc(productRef)
  .then((snapshot)=>{
    setProducto(...snapshot.data());
    setLoading(false);
  })
  .catch(error=>{
    setError(error)
    setLoading(false);
  })
}, [id]);

if (loading) {
  return <div className='cargando'> <CircularProgress disableShrink /></div>;
}

  return(
    <>
    {producto && <ItemDetail producto={producto} id={id}/>}
  </>
  );
}
export default ItemDetailContainer;