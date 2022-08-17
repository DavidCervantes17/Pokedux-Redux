import ItemCard from "./ItemCard";
import './List.css'

const List = ({items}) => {
    console.log(items)
    return(
        <div className="list">
            { items.length > 0 && 
                items.map((item) => {
                    return <ItemCard title={item.name} key={item.name} item={item} image={item.sprites.front_default} />
                })
            }
        </div>
    )
}

export default List;

List.defaultProps = {
    items: Array(10).fill(''),
}