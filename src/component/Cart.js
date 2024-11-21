import React from "react";
import { useCart } from "./CartContext";  // Import the useCart hook

const Cart = () => {
  const { cart, removeFromCart } = useCart();  // Get cart state and remove function

  return (
    <div className="cartproducts">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.imgUrl} alt={item.title} width="50%" height="50%" />
              <p>{item.title}</p>
              <p>${item.price}</p>
              <button className="but" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
