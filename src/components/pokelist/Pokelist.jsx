import { useEffect, useState } from 'react';
import './Pokelist.css'
import Pokename from './Pokename'

export default function Pokelist (){

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`);
        if(!response.ok){
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPokemonData(data.results);
        
      }catch(error){
        console.error('Error fetching Pokemon data:', error);
      }
    }

    fetchData();
    
  },[]);

  return (
    <div className="Pokelist">
      {
        pokemonData && pokemonData.length > 0 && (
          pokemonData.map((pokemon,x) =>(
            <Pokename
              id = {x}
              name = {pokemon.name}
              url={pokemon.url}
            />
          ))
        )
      }
    
      
    </div>
  )

}