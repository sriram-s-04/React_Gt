import React, { useContext } from 'react'
import { dataContext } from './UseContext'

const Card_task4 = () => {
    const { cartItems, addToCart, removeFromCart, clearCart } = useContext(dataContext);
  return (
    <div>
        {/* ### **Task 4: Cart Context for Shopping App**
**Description:**  
Create a shopping cart context that stores added products. Implement buttons to **add, remove, and clear items** from the cart.


âœ… Managing a List in Context  
âœ… Updating Context State  
âœ… Displaying Context Data in Components  
--- */}

        <h2>Shopping Cart</h2>
        <div>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        <button onClick={() => addToCart(`Product ${cartItems.length + 1}`)}>Add Product</button>
        <button onClick={clearCart}>Clear Cart</button>

        

    </div>
  )
}

export default Card_task4