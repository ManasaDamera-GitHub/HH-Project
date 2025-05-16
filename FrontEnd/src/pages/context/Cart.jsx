import React from "react";
import { useCart } from "../Context/CartContext";
import Header from "@/components/Navbar";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <>
      <Header />
      <div className="container py-5">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-muted">Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.title}
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button className="btn btn-danger mt-3" onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
