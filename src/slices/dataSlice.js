import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemonsData, setSearchTerm } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
    pokemonsFiltered: []
}

export const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonWithDetails',
    async (_, {dispatch}) => {
        dispatch(setLoading(true));
        const data = await getPokemonsData();
        const pokemonDetails = await Promise.all(data.map(pokemon => getPokemonDetails(pokemon)))
        dispatch(setPokemons(pokemonDetails));
        dispatch(setLoading(false));
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon)=>{ return pokemon.id === action.payload.pokemonId});

            if(currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite; 
                state.pokemons[currentPokemonIndex].favorite = !isFavorite
            }
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setFilter: (state, action) => {
            const pokemonsFiltered = state.pokemons.filter(pokemon => pokemon.name.includes(action.payload));
            state.pokemonsFiltered = pokemonsFiltered;
        }
    }
})

export const {setFavorite, setPokemons, setFilter} = dataSlice.actions;

export default dataSlice.reducer;