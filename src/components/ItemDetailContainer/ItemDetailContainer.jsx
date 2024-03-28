import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", productId);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.log("El producto no existe");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleOnAdd = (quantity) => {
    if (product) {
      addItem(product, quantity);
    }
  };

  return (
    <div>
      {product ? (
        <ItemDetail
          id={product.id}
          name={product.name}
          img={product.img}
          category={product.category}
          price={product.price}
          description={product.description}
          stock={product.stock}
          handleOnAdd={handleOnAdd}
        />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;