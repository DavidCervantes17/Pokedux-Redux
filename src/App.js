 import './App.css';
 import {Col, Spin} from 'antd'
import SearchBar from './components/SearchBar';
import List from './components/List';
import logo from './statics/logo.svg'
import {useEffect} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonWithDetails } from './slices/dataSlice';
import { setFilter } from './slices/dataSlice';

function App() {

  const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
  const filterPokemons = useSelector(state => state.data.pokemonsFiltered, shallowEqual);
  const isLoading =  useSelector(state => state.ui.loading);
  
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(fetchPokemonWithDetails());
  },[])

  const handleOnChange = (e) => {
    dispatch(setFilter(e.target.value));
  }
  
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <SearchBar onChange={handleOnChange}/>
      </Col>
      {isLoading && <Col offset={12}>
        <Spin style={{marginTop:36}} spinning size='large'/>
      </Col>}
      <List items={filterPokemons.length > 0 ? filterPokemons : pokemons} />
    </div>
  );
}

export default App;

