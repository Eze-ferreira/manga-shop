import React from 'react'
import {useCart} from '../context/cartContext'

const Cart = () => {

    const{products, clearCart} = useCart()

  return (
    <div>
        <div>Carrito</div>
        {products.map((p,i)=><li key={i}>{p.nombre}:{p.precio}</li>)} 
        <button onClick={clearCart}>Limpiar Carrito</button>
    </div>
  )
}

export default Cart