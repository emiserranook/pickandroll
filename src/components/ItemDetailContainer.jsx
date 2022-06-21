import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
const [productDetail,setProductDetail] = useState([]);
const[louding,setloading] = useState();
const[error,seterror] = useState();
const{idProduct} = useParams();

useEffect(() => {
    setproducto([]);
    setloading(true);
    seterror(false);
    console.log(idProduct);

    const proms = new Promise((res,rej) => {
        setTimeout(()=>{
            res([
              {id:"1",title:"camiseta dallas",description:"talle M",precio:"2500",image:"/public/image/remera lebron.jpg"},
              {id:"2",title:"camiseta golden state",description:"talle L",precio:"2600",image:"/public/image/remera nba.jpg"},
              {id:"3",title:"camiseta lakers",description:"talle M",precio:"2500",image:"/public/image/herro.jpg"},
              {id:"4",title:"camiseta lakers",description:"talle L",precio:"2500",image:"/public/image/jokic.jpg"},
            ]);
        },2000);
        
    });
    
    proms
    .then((result) =>{
      setproducto(result);
    })
    .catch((error) =>{seterror(error);})
    .finally(() =>{setloading(false);
    })
}, [idProduct]);

  return(
    <>
      <div>
    {productDetail && productDetail?.map((Item) => (
    <ItemDetail producto={productDetail}/>
  ))};
  </div>
  </>
  )
}
export default ItemDetailContainer;