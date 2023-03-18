import axios from 'axios';
import { useState, useEffect } from 'react'; 

export const PokemonId = (name_pokemon) => {
    const [pokemons, setPokemons] = useState([]);
    const name = name_pokemon;

    useEffect(() => {
        const fetchPokemons = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
            try {
            const response = await axios.get(url);
            const pokemon = {
                id: response.data.id,
                name: response.data.forms[0].name,
                photo: response.data.sprites.other.home.front_default,
                stats: response.data.stats,
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                special_attack: response.data.stats[3].base_stat,
                special_defense: response.data.stats[4].base_stat,
                speed: response.data.stats[5].base_stat,
                types: response.data.types[0].type.name,
            };
            setPokemons(pokemon);
            } catch (error) {
            console.error(error);
            }
        };
        fetchPokemons();
        }, [name]);
    
    return pokemons;
}

export default PokemonId;
