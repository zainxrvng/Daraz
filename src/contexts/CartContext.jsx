// contexts/CartContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("daraz_cart")) || []
  );

  useEffect(
    () => localStorage.setItem("daraz_cart", JSON.stringify(items)),
    [items]
  );

  const addToCart = (product, qty = 1) =>
    setItems((prev) => {
      const exist = prev.find((x) => x.id === product.id);
      if (exist)
        return prev.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + qty } : x
        );
      return [...prev, { ...product, qty }];
    });

  const removeFromCart = (id) =>
    setItems((prev) => prev.filter((x) => x.id !== id));
  const changeQty = (id, qty) =>
    setItems((prev) => prev.map((x) => (x.id === id ? { ...x, qty } : x)));

  const totalQty = items.reduce((t, x) => t + x.qty, 0);
  const totalPrice = items.reduce((t, x) => t + x.qty * x.price, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        changeQty,
        totalQty,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
