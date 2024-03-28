import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"
const Cart = () => {
  const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="CartContainer">
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="Option"> Productos</Link>
      </div>
    );
  }

  const calculateProductTotal = (product) => {
    return product.price * product.quantity;
  };

  return (
    <div className="CartContainer">
      {cart.map((item) => (
        <div key={item.id} className="CartItem">
          <h3>{item.name}</h3>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.price}</p>
          <p>Total por producto: ${calculateProductTotal(item)}</p>
        </div>
      ))}
      <h3 className="CartTotal">Total: ${totalPrice}</h3>
      <p>Cantidad total de ítems: {totalQuantity}</p>
      <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
      <Link to="/checkout" className="Option">Checkout</Link>
    </div>
  );
};

export default Cart;
