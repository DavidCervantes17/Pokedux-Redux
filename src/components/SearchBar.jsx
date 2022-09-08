import {Input} from 'antd';

const SearchBar = ({onChange}) => {
    return (
        <Input.Search onChange={onChange} placeholder='Buscar...' style={{marginBottom:10}} />
    )
}

export default SearchBar;