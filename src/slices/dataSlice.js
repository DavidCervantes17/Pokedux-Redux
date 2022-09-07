import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemonsData } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: []
}

export const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonWithDetails',
    async (_, {dispatch}) => {
        //dispatch loarder
        //fetch
        //dispatch loader
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
        }
    }
})

export const {setFavorite, setPokemons} = dataSlice.actions;

export default dataSlice.reducer;