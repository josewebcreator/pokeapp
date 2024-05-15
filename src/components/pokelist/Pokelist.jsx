import { useContext, useEffect, useState } from 'react';
import './Pokelist.css'
import Pokename from './Pokename'
import { StoreContext } from '../../context/provider';
import actionTypes from '../../reducer/actionTypes';

export default function Pokelist (){

  const [pokemonData, setPokemonData] = useState([]);
  const [store, dispatch] = useContext(StoreContext);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(store.limit)-10}&limit=10`);
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
    
  },[store]);

  function changeLimit(sum){
    if((store.limit+sum)<=0){
      alert("List can not be negative :(");
    }else{
      dispatch({
        type : actionTypes.CHANGE_LIST,
        payload : store.limit+sum
      })
    }
  }

  return (
    <div className="Pokelist">
      <div className="arrow prev--arrow" onClick={()=>changeLimit(-10)}></div>
      {
        pokemonData && pokemonData.length > 0 && (

          pokemonData.map((pokemon,x) =>(
            
            <Pokename
              id = {pokemon.url.slice(0, -1).split('/').pop()}
              name = {pokemon.name}
              url={pokemon.url}
            />
          ))
        )
      }
      <div className="arrow post--arrow" onClick={()=>changeLimit(10)}></div>
    
      
    </div>
  )

}