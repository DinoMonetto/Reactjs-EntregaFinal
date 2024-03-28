import { useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemCount from '../ItemCount/ItemCount';
import "./ItemListContainer.css"
const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [notification, setNotification] = useState(null);

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        let collectionRef = collection(db, "products");

        if (categoryId) {
            collectionRef = query(collectionRef, where("category", "==", categoryId));
        }
        
        getDocs(collectionRef)
            .then((querySnapshot)=> {
                console.log(querySnapshot)
                const products = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(products)
                setLoading(false);
            })
            .catch(error => {
                console.log(error)
                setNotification("Error al cargar los productos"); 
                setLoading(false); 
            })
    }, [categoryId])

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <h1 style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>{greetings}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {notification && <p>{notification}</p>} {}
                    {products.length > 0 ? (
                        products.map(prod => (
                            <div key={prod.id}  className="product-item" style={{ margin: "10px", textAlign: "center" }}>
                                <ItemList products={[prod]} />
                            </div>
                        ))
                    ) : (
                        <p>No hay productos disponibles.</p>
                    )}
                </>
            )}
        </div>
    )
}

export default ItemListContainer;
