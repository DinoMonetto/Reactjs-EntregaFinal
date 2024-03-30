import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item, quantity) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      updatedCart.push({ ...item, quantity });
    }

    const newTotalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
    const newTotalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);

    setCart(updatedCart);
    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    const newTotalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
    const newTotalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);

    setCart(updatedCart);
    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
