import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (service) => {
    const exists = cartItems.find((item) => item.title === service.title);
    if (!exists) {
      setCartItems([...cartItems, { ...service, quantity: 1 }]);
      toast.success(`${service.title} added to cart`);
    } else {
      toast.info(`${service.title} is already in cart`);
    }
  };

  const removeFromCart = (title) => {
    const removedItem = cartItems.find((item) => item.title === title);
    setCartItems(cartItems.filter((item) => item.title !== title));
    toast.warn(`${removedItem?.title} removed from cart`);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
