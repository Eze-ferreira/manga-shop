
import { doc, collection, getDocs, getFirestore } from "firebase/firestore";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {useCart} from '../context/cartContext'


const ItemDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const {addToCart} = useCart()

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = () => {
    const db = getFirestore();
    const productCollection = collection(db, "products");
    const docRef = doc(productCollection, id);
    getDocs(docRef).then((res) => {
      console.log(res.data());
      setProduct(res.data());
    });
  };

  const addHandler = () => {
    addToCart(product)
  }

  return (
    <div>
      <div className="">{product.nombre}</div>
      <div className="">{product.precio}</div>
      <div className="">{product.demografia}</div>
      <div className="">{product.categoria}</div>
      <img className="" src={product.img} height={200} ></img>
      <button onClick={addHandler}> Agregar a Carrito </button>
    </div>
  );
};

export default ItemDetail;
