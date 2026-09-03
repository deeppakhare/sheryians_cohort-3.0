import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CreateCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart((elem) => {
      const existingItem = elem.find((item) => item.id === product.id);
      if (existingItem) {
        return elem.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...elem, { ...product, quantity: 1 }];
    });
  };
  console.log(cart);

  const removeFromCart = (id) => {
    setCart((product) => {
      product.filter((item) => item.id !== id);
    });
  };

  const allCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const increaeQuantity = (id) => {
    setCart((item) => {
      item.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );
    });
  };

  const decreaseQuantity = (id) => {
    setCart((item) => {
      item
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        )
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        allCartCount,
        totalAmount,
        increaeQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CreateCartContextProvider;
