import { useContext, useEffect } from "react"
import { PokemonContext } from "./pokemonSlice"

const PokeList = () => {

  const { allPokemons, getAllPokemons, selectPokemon } = useContext(PokemonContext)

  useEffect(() => {
    getAllPokemons()
  }, [])
  

  return (
    <>
      {
        allPokemons 
          ?
            <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {
                allPokemons.map(pokemon => (
                <button key={ pokemon.name } onClick={(e) => selectPokemon(pokemon.name)} type="button" className="w-full px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    { pokemon.name }
                </button>
                ))
              }
            </div>
          :
            <span>No pokemons</span>
      }
    </>
  );
}

export default PokeList;