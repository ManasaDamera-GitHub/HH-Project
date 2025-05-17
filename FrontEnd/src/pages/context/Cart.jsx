import React from "react";
import { useCart } from "../context/CartContext";
import Header from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/AllServices.css";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.starts_at_price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className="container py-5">
        <h2 className="mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-muted">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.title}
                className="card p-3 mb-3 d-flex flex-row align-items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded me-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="flex-grow-1">
                  <h5>{item.title}</h5>
                  <p>Price: ₹{item.starts_at_price}</p>
                  <div className="d-flex align-items-center">
                    <label className="me-2">Qty:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) =>
                        updateQuantity(item.title, parseInt(e.target.value))
                      }
                      style={{ width: "60px" }}
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                <button
                  className="btn btn-outline-danger ms-3"
                  onClick={() => removeFromCart(item.title)}
                >
                  <i className="bi bi-trash" />
                </button>
              </div>
            ))}
            <h4>Total: ₹{total}</h4>
            <button className="btn btn-success mt-3">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
