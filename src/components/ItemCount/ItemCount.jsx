import { useState } from "react"
import "./ItemCount.css";
const ItemCount = ({initial=1, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
const increment = () => {
    if (quantity < stock) {
    setQuantity (quantity+1)
}}
const decrement = () => {
    if (quantity > 1)
{
    setQuantity (quantity-1)
}}
const handleAddToCart = () => {
    if (quantity > 0) {
        onAdd(quantity);
    }
};
return (
    <div>
        <div>
            <h3>{quantity}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
        <div>
        <button className="Button" onClick={handleAddToCart} disabled={!stock || quantity === 0}>
                    Agregar al carrito
                </button>
        </div>
    </div>
)
}

export default ItemCount