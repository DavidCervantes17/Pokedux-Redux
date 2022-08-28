import { SET_POKEMONS, SET_ISLOADING, SET_FAVORITE } from "../actions/types";
import { fromJS } from "immutable";

const initialState = fromJS({
    pokemons: [],
    isLoading: false
});

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POKEMONS: return state.setIn(['pokemons'], fromJS(action.payload));
        //return {...state, pokemons: action.payload};
        case SET_ISLOADING: return state.setIn(['loading'], action.payload);
        case SET_FAVORITE: 
            //const newPokemonList = [...state.pokemons];
            //const currentPokemonIndex = newPokemonList.findIndex((pokemon)=>{ return pokemon.id === action.payload.pokemonId});
            const currentPokemonIndex = state.get('pokemons').findIndex((pokemon)=>{ return pokemon.get('id') === action.payload.pokemonId});

            if(currentPokemonIndex < 0) return state;
            //newPokemonList[currentPokemonIndex].favorite =  !newPokemonList[currentPokemonIndex].favorite;
            const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);
            //[currentPokemonIndex].favorite =  !newPokemonList[currentPokemonIndex].favorite;
            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
            //return {...state, pokemons: newPokemonList}
        default: return state
    }
}