import React from 'react'
import Item from './Item'

const ItemList = ({resultado}) =>{
  return (
    <div>
      {resultado && resultado.map((Item) => (
    <>
    <p>id:{item.id}</p>
    <p>title:{item.title}</p>
    <p>description:{item.description}</p>
    <p>precio:{item.precio}</p>
    </>
  ))}
   </div>

export default ItemList
