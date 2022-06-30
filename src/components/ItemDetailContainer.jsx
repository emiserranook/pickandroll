import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {doc, getDoc, getFirestore} from 'firebase/firestore';



function ItemDetailContainer() {
const[louding,setLoading] = useState();
const[error,setError] = useState();
const[ result, setResult] = useState;
const{ id} = useParams();

useEffect(() => {
  const db = getFirestore();

  const productRef = doc(db,'items', id);

  getDoc(productRef)
  .then((snapshot)=>{
    setResult({...snapshot.data(), id: snapshot.id});
  })
  .catch((error)=>{
    setError(error);
  })
  .finally(()=>{
    setLoading(false);
  });
}, [id]);

  return(
    <>
    {result && <ItemDetail producto = {result}/>}
  </>
  );
}
export default ItemDetailContainer;