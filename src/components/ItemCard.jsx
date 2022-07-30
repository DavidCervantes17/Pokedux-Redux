import { StarOutlined } from '@ant-design/icons';
import {Card} from 'antd';
import Meta from 'antd/lib/card/Meta';

const ItemCard = ({title}) => {
    return (
        <Card 
            extra={<StarOutlined/>}
            title={title} 
            cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto"/>}>
            <Meta description="fire, magic" />
        </Card>
    )
}

export default ItemCard;