import axios from "axios";
import React, { useEffect, useState } from "react";
import "./total.css";
const E_comwithAPI = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

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
  return (
    <div className="main">
      <div className="side">
        <h1 className="title">Casual Wear</h1>
        <div className="products">
          {products &&
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
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className="side">
        <h1 className="title">Categories</h1>
        </div>  
      </div>
      <div>
        <div className="side">
        <h1 className="title">Users</h1>
        </div>
      </div>
    </div>
  );
};

export default E_comwithAPI;
