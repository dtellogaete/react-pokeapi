import axios from 'axios';
import { useState, useEffect } from 'react'; 

export const PokemonName = () => {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
      const fetchPokemons = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`;
        try {
          const response = await axios.get(url);
          setPokemons(response.data.results);
        } catch (error) {
          console.error(error);
        }
      };
      fetchPokemons();
    }, []);
  
    const pokemonNames = pokemons.map((pokemon) => pokemon.name);
  
    return pokemonNames;
  }


export default PokemonName;

