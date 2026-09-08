import { createContext, useState } from "react";

export const WishlistContext = createContext();

const CreateWishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const existingItem = prevWishlist.find((item) => item.id === product.id);

      if (existingItem) {
        return prevWishlist;
      }

      return [...prevWishlist, product];
    });
  };

  const removeWishlistItem = (id) => {
    setWishlist((product) => product.filter((item) => item.id !== id));
  };

  const removeAllItems = () => {
    setWishlist([]);
  };

  const itemCheck = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeWishlistItem,
        removeAllItems,
        itemCheck,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default CreateWishlistContextProvider;
