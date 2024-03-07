import { useEffect, useState} from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect(() => {
        const asynFunctions = categoryId ? getProductsByCategory : getProducts
        asynFunctions(categoryId)
            .then (res => {
                setProducts(res)
            })
            .catch (error => {
                console.log(error)
            })
    }, [categoryId])
    console.log 
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <h1 style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}>{greetings}</h1>
            {products.length > 0 ? (
                products.map(prod => (
                    <div key={prod.id} style={{ margin: "10px", textAlign: "center" }}>
                        <ItemList products={[prod]} />
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default ItemListContainer