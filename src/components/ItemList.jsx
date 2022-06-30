import React from 'react'
import Item from './Item'

export default function ItemList({result}){
  return(
    <>
    <div style ={{display: "flex", flexWrap:"wrap"}}>
    {result && result?.map((item) => <Item item={item}/>)}
    </div>
    </>
  );
}