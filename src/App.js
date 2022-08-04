 import './App.css';
 import {Col} from 'antd'
import SearchBar from './components/SearchBar';
import List from './components/List';
import logo from './statics/logo.svg'
import { getPokemonsData } from './api';
import {useEffect} from 'react';
import { setPokemons } from './actions';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(()=>{
    const getPokemons = async () => {
      const data = await getPokemonsData();
      dispatch(setPokemons(data));
    }
    getPokemons();
  },[])
  
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <SearchBar/>
      </Col>
      <List items={pokemons} />
    </div>
  );
}

export default App;

