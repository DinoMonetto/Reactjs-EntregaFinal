import Item from "../Item/Item"

const ItemList = ({products}) => {
return (
    <div>
        {
            products.map(products => {
                return <Item key={products.id} {...products} />
            })
        }
    </div>
)
}

export default ItemList