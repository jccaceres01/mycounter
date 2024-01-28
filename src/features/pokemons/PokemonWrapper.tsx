import { useReducer } from "react"
import { PokemonContext, pokemonReducer, initialPokemonState } from "./pokemonSlice";

const PokemonWrapper = ({ children }) => {
  
  const [pokemons, dispatch] = useReducer(pokemonReducer, initialPokemonState)

  const getAllPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(async res => await res.json())
      .then(data => {
        dispatch({ type: 'get_all_pokemons', payload: data.results })
      }).catch(er => console.log(er))
  }

  const selectPokemon = (name: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(async res => await res.json())
      .then(data => {
        dispatch({ type: 'select_pokemon', payload: data})
      }).catch(er => console.log(er))
  }

  return <PokemonContext.Provider value={{
    allPokemons: pokemons.allPokemons,
    selectedPokemon: pokemons.selectedPokemon,
    getAllPokemons,
    selectPokemon
  }}>
    { children }
  </PokemonContext.Provider>
}

export default PokemonWrapper;