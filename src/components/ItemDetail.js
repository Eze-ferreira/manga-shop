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
    const docRef = doc(db,'items' ,id);
    getDoc(docRef).then((res) =>{
      setProduct({id: res.id, ...res.data()})
    })
  };

  const addHandler = () => {
    addToCart(product);
  };

  return (
    <div className="detail-card-container">
      <div className="item-card-detail">
      <div className="item-title-detail">{product.nombre}</div>
      <div className="item-title-detail">{product.precio}</div>
      <div className="item-title-detail">{product.demografia}</div>
      <img className="item-detail-img" src={product.img} height={200}></img>
      <button className="add-cart-button" onClick={addHandler}> Agregar a Carrito </button>
      </div>
    </div>
  );
};

export default ItemDetail;
