import { Link } from "react-router-dom"
import "./Item.css";


const Item = ({id, name, img, category, price}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} alt="" style={{width: 100}} />
        <p>Categoria:{category}</p>
        <h1>${price}</h1>
        <Link to={`/detail/${id}`}>Ver Detalles</Link>
    </article>
  )
}

export default Item