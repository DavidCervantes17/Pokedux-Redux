import axios from 'axios';

export const getPokemonsData = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.data.results)
    .catch(error => console.error(error));
}