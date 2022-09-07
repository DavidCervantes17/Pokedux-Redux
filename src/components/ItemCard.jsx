import {Alert, Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';
import StarButton from './StarButton';

const ItemCard = ({title, image, types, id, favorite}) => {

    const typesString = types.map(elem => elem.type.name).join(', ');
    const dispatch = useDispatch();
    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId: id}));
    }
    return (
        <Card 
            extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
            title={title} 
            cover={<img src={image} alt={title} />}>
            <Meta description={typesString} />
        </Card>
    )
}

export default ItemCard;