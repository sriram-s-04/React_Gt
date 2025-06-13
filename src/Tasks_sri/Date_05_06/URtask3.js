import React, { useReducer } from "react";

const initialState = { cartItems: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        case "REMOVE_FROM_CART":
            return { ...state, cartItems: state.cartItems.filter(item => item !== action.payload) };
        case "UPDATE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                )
            };
        case "CLEAR_CART":
            return { ...state, cartItems: [] };
        default:
            return state;
    } 
};

const URtask3 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
{/* Cart Management (Add, Remove, Update Quantity)
Goal: Implement a simple shopping cart where users can:
*/}
<div>
  {state.cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {state.cartItems.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: `Product ${state.cartItems.length + 1}` })}>
        Add Product
      </button>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>
    </div>
  );
};
export default URtask3;
