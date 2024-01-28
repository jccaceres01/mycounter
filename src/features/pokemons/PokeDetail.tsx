import { useContext } from "react"
import { PokemonContext } from "./pokemonSlice";

const PokeDetail = () => {

  const { selectedPokemon } = useContext(PokemonContext)

  return (
    <>
      {
        selectedPokemon
          ?
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td><strong>Image: </strong></td>
                  <td><img src={ selectedPokemon.sprites.front_default } alt={ selectedPokemon.name } /></td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td><strong>Name: </strong></td>
                  <td>{ selectedPokemon.name }</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td><strong>Weight: </strong></td>
                  <td>{ selectedPokemon.weight }</td>
                </tr>
              </tbody>
            </table>
          :
          <span>No pokemon selected</span>
      }
      
    </>
  );
}

export default PokeDetail;