import { SET_POKEMONS, SET_ISLOADING, SET_FAVORITE } from "../actions/types";

const initialState = {
    pokemons: [],
    isLoading: false
};

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POKEMONS: return {...state, pokemons: action.payload};
        case SET_ISLOADING: return {...state, loading: action.payload};
        case SET_FAVORITE: 
            const newPokemonList = [...state.pokemons];
            const currentPokemonIndex = newPokemonList.findIndex((pokemon)=>{ return pokemon.id === action.payload.pokemonId});
            if(currentPokemonIndex < 0) return {...state};
            newPokemonList[currentPokemonIndex].favorite =  !newPokemonList[currentPokemonIndex].favorite;
            return {...state, pokemons: newPokemonList}
        default: return state
    }
}