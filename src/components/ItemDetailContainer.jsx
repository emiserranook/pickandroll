import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore';



function ItemDetailContainer() {
const[louding,setLoading] = useState();
const[error,setError] = useState();
const[ producto, setProducto] = useState;
const{ id} = useParams();

useEffect(() => {
  const db = getFirestore();

  const productRef = doc(db,'items', id);

  getDoc(productRef)
  .then((snapshot)=>{
    setProducto({...snapshot.data(), id: snapshot.id});
  })
  .catch((error)=>{
    console.log(error)
    setError(true);
  })
  .finally(()=>{
    setLoading(false);
  });
}, [id]);

  return(
    <>
    {producto && <ItemDetail items = {producto}/>}
  </>
  );
}
export default ItemDetailContainer;