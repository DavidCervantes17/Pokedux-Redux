 import './App.css';
 import {Col, Spin} from 'antd'
import SearchBar from './components/SearchBar';
import List from './components/List';
import logo from './statics/logo.svg'
import { getPokemonsData } from './api';
import { getPokemonsWithDetails, setLoading } from './actions';
import {useEffect} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


function App() {

  //shallow equal to prevent unnecesarry render, it checks === but also value, shallow equal is not necesary in booleans
  const pokemons = useSelector(state => state.getIn(['data','pokemons'], shallowEqual)).toJS();
  const isLoading = useSelector(state => state.getIn(['data','loading']));
  const dispatch = useDispatch();

  useEffect(()=>{
    const getPokemons = async () => {
      dispatch(setLoading(true));
      const data = await getPokemonsData();
      dispatch(getPokemonsWithDetails(data));
      dispatch(setLoading(false));
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
      {isLoading && <Col offset={12}>
        <Spin spinning size='large'/>
      </Col>}
      <List items={pokemons} />
    </div>
  );
}

export default App;

