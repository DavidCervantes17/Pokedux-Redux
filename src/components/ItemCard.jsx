import { StarOutlined } from '@ant-design/icons';
import {Card} from 'antd';
import Meta from 'antd/lib/card/Meta';

const ItemCard = ({title, image}) => {
    return (
        <Card 
            extra={<StarOutlined/>}
            title={title} 
            cover={<img src={image} alt={title} />}>
            <Meta description="fire, magic" />
        </Card>
    )
}

export default ItemCard;