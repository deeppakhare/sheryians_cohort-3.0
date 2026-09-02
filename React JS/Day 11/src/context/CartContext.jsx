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

  const increaeQuantity = (item) => {
    cart.map
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addCart, increaeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
