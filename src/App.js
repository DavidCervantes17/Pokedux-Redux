 import './App.css';
 import {Col} from 'antd'
import SearchBar from './components/SearchBar';
import List from './components/List';
import logo from './statics/logo.svg'
import { getPokemonsData } from './api';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import { setPokemons as setPokemonsActions } from './actions';


function App({pokemons, setPokemons}) {

  useEffect(()=>{
    const getPokemons = async () => {
      const data = await getPokemonsData();
      setPokemons(data)
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

