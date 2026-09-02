import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CreateCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart((elem) => {
      const existingItem = elem.find((item) => item.id === product.id);
      if (existingItem) {
        return elem.map((item) => {
          item.id === product.id
            ? { ...elem, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [...elem, { ...product, quantity: 1 }];
      }
    });
  };
  console.log(cart);

  const removeFromCart = (id) => {
    setCart((product) => {
      product.map((item) => item.id !== id);
    });
  };

  const allCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const increaeQuantity = (id) => {
    setCart((item) => {
      item.map((product) =>
        product.id === id
          ? [{ ...product, quantity: product.quantity + 1 }]
          : product,
      );
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addCart, allCartCount, increaeQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
