import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

let productos = [
  {id:"1",title:"camiseta Lebron James",description:"talle M",price:"2500",image:"/public/image/remera lebron.jpg"},
  {id:"2",title:"camiseta Stephen Curry",description:"talle L",price:"2600",image:"/public/image/remera nba.jpg"},
  {id:"3",title:"camiseta Tyler Herro",description:"talle M",price:"2500",image:"/public/image/herro.jpg"},
  {id:"4",title:"camiseta Nikola Jokic",description:"talle L",price:"2500",image:"/public/image/jokic.jpg"},
  {id:"5",title:"camiseta Ja Morant",description:"talle XL",price:"2500",image:"/public/image/ja morant.jpg"},
  {id:"6",title:"camiseta Luka Doncic",description:"talle L",price:"2500",image:"/public/image/camiseta doncic.jpg"},
  {id:"7",title:"camiseta Jason Tatum",description:"talle M",price:"2500",image:"/public/image/camiseta boston.jpg"},
  {id:"8",title:"camiseta Kevin Durant",description:"talle L",price:"2500",image:"/public/image/camiseta durant.jpg"},
];
function ItemDetailContainer() {
const [productDetail,setProductDetail] = useState([]);
const[louding,setloading] = useState();
const[error,seterror] = useState();
const{idProd} = useParams();

useEffect(() => {
    setloading(true);
    seterror(false);
    console.log(idProd);

    const proms = new Promise((res,rej) => {
        setTimeout(()=>{
            const productos = productos.find((p) => p.id == idProd);
        }, 2000);
        
    });
    
    proms
    .then((result) =>{
      setProductDetail(result);
    })
    .catch((error) =>{
      seterror(error);
    })
    .finally(() =>{
      setloading(false);
    })
}, [idProd]);

  return(
    <>
    <ItemDetail productos = {productDetail}/>
  </>
  );
}
export default ItemDetailContainer;