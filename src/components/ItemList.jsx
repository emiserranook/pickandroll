import React from 'react'
import Item from './Item'

export default function ItemList({productos}){
  return(
    <>
    <div style ={{display: "flex", flexWrap:"wrap"}}>
    {productos && productos?.map((items) => <Item items={items}/>)}
    </div>
    </>
  );
}