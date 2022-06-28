import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const {cart, emptyCart, getItemPrice, deleteItem} = useContext(CartContext);
  const carritoVacio = cart.length === 0;

  return (
    <>
    <h2>Mi Carrito</h2>
    <div>
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {(carritoVacio &&
          <tr>
            <td colSpan="6" className="empty-cart">
              <h3>No hay productos en el carrito</h3>
            </td>
          </tr>
        ) || 
        cart.map(item => (
          <tr key={item.id}>
            <td>
              {item.title}
            </td>
            <td>
              ${item.price}
            </td>
            <td>
              {item.count}
            </td>
            <td className="cart-item-total">
              ${item.price * item.count}
            </td>
            <td className="cart-item-remove">
              <button className="botonPrincipal" onClick={() => deleteItem(item.id)}>
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    <div className="cart-footer">
      {carritoVacio?
          <Link to="/"><button className="botonPrincipal">Volver al inicio</button></Link>
          :
          <>
          <h3>Total: ${getItemPrice()}</h3>
          <Link to="/cart"><button className="botonPrincipal">Continuar al Pago</button></Link>
          <button className="botonPrincipal" onClick={emptyCart}>Vaciar Carrito</button>
          </>
      }
    </div>
    </div>      
          </>

  )
}