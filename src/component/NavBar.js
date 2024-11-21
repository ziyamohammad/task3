import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "./CartContext"; 



const NavBar = () => {
  const { cart } = useCart(); 
  const [item1, setItem1] = useState([]);  
  const [text, setText] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const API = "https://dummyjson.com/products?limit=194";

  async function fetchApiData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);  
      if (data.products && data.products.length > 0) {
        const updatedProducts = data.products.map(product => ({
          ...product,
          title: product.title || "Unnamed Product" 
        }));
        setItem1(updatedProducts); 
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchApiData(API);
  }, []); 

  const handleOnChange = (event) => {
    const searchText = event.target.value;
    setText(searchText);

    if (searchText.trim() === "") {
      setFilteredProducts([]); 
    } else {
      const filtered = item1.filter(product =>
        product.title && product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered); 
    }
    
  };
  const Remove=()=>{
    setText("");
    setFilteredProducts([]);
  }

  return (
    <div className="nav">
      <ul>
        <li><h3>Shopify</h3></li>
        <li>
          <input
            type="text"
            value={text}
            className="searchBox"
            onChange={handleOnChange}
            placeholder="Search for products"
          />
          <button className="searchButton">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </li>
        <span className="links">
          <li><Link to="/Products">Product</Link></li>
          <li><Link to="/Categories">Categories</Link></li>
          <li><Link to="/Login"><i className="fa-solid fa-user"></i> Login</Link></li>
          <li><Link to="/Cart"><i className="fa-solid fa-cart-shopping"></i> ({cart.length})</Link></li>
        </span>
      </ul>

      <div className="dropdown-wrapper">
        {filteredProducts.length > 0 && (
          <div className="dropdown">
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {filteredProducts.map((product) => (
                <div key={product.id} className="dropdown-item" onClick={Remove}>
                  <Link to={`/products/${product.id}`}>{product.title}</Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {text && filteredProducts.length === 0 && (
          <div className="dropdown">
            <p>No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
