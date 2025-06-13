import React, { useContext, useReducer } from 'react'
import { dataContext } from './E_comwithAPI';





const Cart = () => {
  const { cartstate, dispatch } = useContext(dataContext) ;
  console.log(cartstate);  

  return (
    <div>
      <div>
        {cartstate.cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartstate.cartItems.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> - ${item.price}  
                <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>Remove</button>
              </li>
            ))} 
          </ul>
        )}
      </div>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>
    </div>
  )
}

export default Cart