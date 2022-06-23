import React from 'react'
import Item from './Item'

export default function ItemList({resultado}){
  return(
    <>
    <div style ={{display: "flex", flexWrap:"wrap"}}>
    {resultado && resultado?.map((item) => <Item item={item}/>)}
    </div>
    </>
  );
}