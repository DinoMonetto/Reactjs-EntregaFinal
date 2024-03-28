import React, { useContext, useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  collection,
  getDocs,
  query,
  writeBatch,
  where,
  addDoc,
  documentId,
} from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Checkout.css";
import Cart from "../Cart/Cart";


const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  useEffect(() => {
    console.log("orderId:", orderId); 
  }, [orderId]);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: totalPrice,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((products) => products.id);

      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find(
          (products) => products.id === doc.id
        );
        const prodQuantity = productAddedToCart?.quantity;

        console.log(
          `ID: ${doc.id}, Stock en DB: ${stockDb}, Cantidad en Carrito: ${prodQuantity}`
        );
        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("No hay stock"); 
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }
  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
