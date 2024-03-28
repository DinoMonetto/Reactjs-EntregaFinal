import logo from '../../assets/restaurante.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <div>
        <Link to={"/cart"} className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={logo} alt="Cart" />
        </Link>
        
        </div>
    )
}

export default CartWidget;