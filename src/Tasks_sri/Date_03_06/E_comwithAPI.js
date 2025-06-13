import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./total.css";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
export let dataContext = createContext();
const initialState = { cartItems: [] };

const Reducer = (cartstate, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Avoid duplicate adds
      const isExist = cartstate.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (isExist) return cartstate;
      return {
        cartItems: [...cartstate.cartItems, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        cartItems: cartstate.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "UPDATE_QUANTITY":
      return {
        cartItems: cartstate.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "CLEAR_CART":
      return { cartItems: [] };

    default:
      return cartstate;
  }
};

const E_comwithAPI = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const[iscartOpen, setIsCartOpen] = useState(false);

  function getProducts() {
    axios.get("https://api.escuelajs.co/api/v1/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }
  function getUsers() {
    axios.get("https://api.escuelajs.co/api/v1/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }
  function getCategories() {
    axios.get("https://api.escuelajs.co/api/v1/categories").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }
  useEffect(() => {
    getProducts();
    getUsers();
    getCategories();
  }, []);

  // add to cart functionality using usereducer hook
  const [cartstate, dispatch] = useReducer(Reducer, initialState);

  const nav = useNavigate();
  const cartclick = () => {
    setIsCartOpen(!iscartOpen);
    
  };

  return (
    <dataContext.Provider value={{ cartstate, dispatch }}>
      <div className="main">
        <div className="side">
          <h1 className="title">Casual Wear</h1>

          <div className="cart" onClick={() => cartclick()}>
            <FaCartShopping className="cart_icon" />

            {/* {state.cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {state.cartItems.map((item, index) => (
                <li key={index}>
                  {item.title}
                  <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>Remove</button>
                </li>
              ))}
            </ul>
          )} */}
          </div>

          <div className="products">
            {products && !iscartOpen &&
              products.slice(0, 10).map((product) => (
                // Limit to first 5 items
                <div className="products_container">
                  <div key={product.id} className="products_card">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      style={{ width: "200px", height: "200px" }}
                    />
                    <p className="product_price">${product.price}</p>
                    <p className="product_title">{product.title}</p>
                    <button
                      className="add_to_cart"
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payload: product })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="side">
          <h1 className="title">Casual Wear</h1>
          <div className="Categories">
            {categories &&
              categories.slice(0, 5).map((category) => (
                // Limit to first 5 items
                <div className="products_container">
                  <div key={category.id} className="products_card">
                    <img
                      src={category.image}
                      alt={category.name}
                      style={{ width: "200px", height: "200px" }}
                    />
                    <p className="product_title">{category.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="side">
          <h1 className="title">Users</h1>
          <div className="users">
            {users &&
              users.slice(0, 3).map((user) => (
                // Limit to first 3 items
                <div className="products_container">
                  <div key={user.id} className="products_card">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      style={{ width: "200px", height: "200px" }}
                    />
                    <p className="product_title">{user.name}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {iscartOpen &&
      <Cart /> }
    </dataContext.Provider>
  );
};

export default E_comwithAPI;
