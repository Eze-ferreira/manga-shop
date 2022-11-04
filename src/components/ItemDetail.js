import { doc, collection, getDocs, getDoc, getFirestore } from "firebase/firestore";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/cartContext";

const ItemDetail = () => {
  const { id,} = useParams();

  const [product, setProduct] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    const db = getFirestore();
   /*  const itemCollection = getDoc(doc(db, "items"));
    const docRef = doc(itemCollection, id);
    getDocs(docRef).then((res) => {
      console.log(res.data());
      setProduct(res.data());
    }); */
    const docRef = doc(db,'items' ,id);
    getDoc(docRef).then((res) =>{
      setProduct({id: res.id, ...res.data()})
    })
  };

  const addHandler = () => {
    addToCart(product);
  };

  return (
    <div>
      <div className="">{product.nombre}</div>
      <div className="">{product.precio}</div>
      <div className="">{product.demografia}</div>
      <div className="">{product.categoria}</div>
      <img className="" src={product.img} height={200}></img>
      <button onClick={addHandler}> Agregar a Carrito </button>
    </div>
  );
};

export default ItemDetail;
