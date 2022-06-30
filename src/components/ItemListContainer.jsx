import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [result, setResult] = useState([]);
  const {id} = useParams();


  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, 'items');

    if (id) {
      const q = query(itemsCollection, where('category', '==', id));

      getDocs(q)
      .then((snapshot) => {
        setResult(snapshot.docs.map((doc) =>({...doc.data(), id: doc.id})));
      })
      .catch((error)=>{
        setError(error);
      })
      .finally(()=>{
        setLoading(false);
      });
    }else{
      getDocs(itemsCollection)
    .then((snapshot) => {
      setResult(snapshot.docs.map((doc) =>({...doc.data(), id: doc.id})));
    })
    .catch((error)=>{
      setError(error);
    })
    .finally(()=>{
      setLoading(false);
    });

    }
  }, [id]);

  
  return (
  <>
  <ItemList items={result} />
  </>
  )
}

export default ItemListContainer;