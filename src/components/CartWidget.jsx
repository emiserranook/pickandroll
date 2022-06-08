import React from 'react'


function CartWidget({items}) {
  return (
    <>
    <i className='carrito'><ion-icon name="cart-outline"></ion-icon>
    <span>{items}</span>
    </i>
    </>  
  )
}

export default CartWidget