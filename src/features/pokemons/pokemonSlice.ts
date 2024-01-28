import { createContext } from "react"
import { PokemonState } from "../../vite-env";

export const initialPokemonState = {
  allPokemons: [],
  selectedPokemon: null
}

export const PokemonContext = createContext(initialPokemonState);

export const pokemonReducer = (state: PokemonState, action) => {
  switch (action.type) {
    case 'get_all_pokemons':
        return {
          ...state,
          allPokemons: action.payload
        }
    case 'select_pokemon':
        return {
          ...state,
          selectedPokemon: action.payload
        }
    default:
      return state
  }
}
