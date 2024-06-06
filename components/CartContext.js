// components/CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const taxRate = 0.2;
  const cartTax = cartTotal * taxRate;
  const cartGrandTotal = cartTotal + cartTax;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, cartTotal, cartTax, cartGrandTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
