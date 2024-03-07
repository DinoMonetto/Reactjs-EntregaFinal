import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
return (
    <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#add8e6", padding: "1px"}}>
        <h1><Link to="/">Ecomerce</Link></h1>
        <section>
            <Link to="/category/fruta" style={{ marginRight: "10px" }}>Frutas</Link>
            <Link to="/category/verdura" style={{ marginRight: "10px" }}>Verduras</Link>
            <Link to="/category/carne" style={{ marginRight: "10px" }}>Carnes</Link>
        </section>
        <CartWidget />
    </nav>
)

}

export default NavBar