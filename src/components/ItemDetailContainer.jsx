import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
const [productDetail,setProductDetail] = useState([]);
useEffect(() => {
    setproducto([]);
    setloading(true);
    seterror(flase);

    const proms = new Promise((res,rej) => {
        setTimeout(()=>{
            res(productosMock[id - 1]);
        }2000);
        
    });
    
    proms
    .then((result) =>{setproducto(result);})
    .catch((error) =>{seterror(error);})
    .finally(() =>{setloading(false);
    })
}, [id]);

  return (
    <div>
        <ItemDetail productDetail = {productDetail} />
    </div>
  );
}

export default ItemDetailContainer