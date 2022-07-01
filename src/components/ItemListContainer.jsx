import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [productos, setProductos] = useState([]);
  const {id} = useParams();


  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, 'items');

    if (id) {
      const q = query(itemsCollection, where('category', '==', id));

      getDocs(q)
      .then((snapshot) => {
        setProductos(snapshot.docs.map((doc) =>({...doc.data(), id: doc.id})));
      })
      .catch((error)=>{
        console.log(error);
        setError(true);
      })
      .finally(()=>{
        setLoading(false);
      });
    }else{
      getDocs(itemsCollection)
    .then((snapshot) => {
      setProductos(snapshot.docs.map((doc) =>({...doc.data(), id: doc.id})));
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
  <ItemList productos={productos} />
  </>
  )
}

export default ItemListContainer;