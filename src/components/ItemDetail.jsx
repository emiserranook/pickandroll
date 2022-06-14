import React from 'react'

const ItemDetail = ({productDetail}) => {
  return (
    <div>
      <p>id:{item.id}</p>
      <p>title:{item.title}</p>
      <p>description:{item.description}</p>
      <p>precio:{item.precio}</p>
    </div>
  )
}

export default ItemDetail