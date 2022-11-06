import React from "react";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Card } from "./Card";
import "../styles/cardStyles.css";
import { useParams } from "react-router-dom";

const ListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category: category } = useParams();

  useEffect(() => {
    getProducts();
  }, [category]);

  const getProducts = () => {
    const db = getFirestore();
    if (category != null) {
      getDocs(
        query(collection(db, "items"), where("demografia", "==", category))
      )
        .then((docSnap) => {
          setProducts(
            docSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        });
    } else {
      const productsCollection = collection(db, "items");
      getDocs(productsCollection).then((res) => {
        const productsData = res.docs.map((d) => ({ id: d.id, ...d.data() }));
        console.log(productsData);
        setProducts(productsData);
        setLoading(false);
      });
    }
  };

  return (
    <div className="card-Container">
      {/* <Card></Card> */}
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        products.map((p) => <Card key={p.id} {...p} />)
      )}
    </div>
  );
};

export default ListContainer;
