import React, { useState } from 'react'

const ItemCount = ({inicial, max, onAdd}) => {
    const [count, setCount] = useState(inicial)
    
    const sumar = () => {
        if (count < max) {
          setCount(count + 1)
        } else {
          alert ("no puedes agregar mas productos")
      }
    }
    const restar = () => {
      count > inicial ? setCount(count - 1) : alert ("no puedes quitar mas productos")
    }
    const reset = () => {
      setCount(inicial)
    }
    
      return (
      <div>
      <h2 className='contador'>{count}</h2>
      <button onClick={sumar}>+</button>
      <button onClick={() => { onAdd(count);reset () }}>agregar al carrito</button>
      <button onClick={reset}>reset</button>
      <button onClick={restar}>-</button>
      </div>
    )
}

export default ItemCount