import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CreateCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

    const addCart = (item) => {
        console.log(item);
        setCart(item);
    }

  return <CartContext.Provider value={{cart, setCart, addCart}}>{children}</CartContext.Provider>;
};
