import React from 'react'
import {useState, useEffect} from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { Card } from './Card'


const ListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getProducts()
    }, [])

    const getProducts = () =>{
        const db = getFirestore()
        const productsCollection = collection(db,'products')
        getDocs(productsCollection).then(res=>{
            const productsData = res.docs.map(d=>({id: d.id, ...d.data()}))
            console.log(productsData);
            setProducts(productsData)
            setLoading(false)
        })
    }
    
  return (
    
    <div>
        <Card></Card>
        {loading ? <h1>Cargando...</h1>
        :
        products.map(p=> <Card key={p.id}{...p}/>)}</div>
        
  )
}

export default ListContainer