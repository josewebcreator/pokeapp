import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/provider';
import './pokeimage.css'


export default function Pokeimage(){

  const [store, dispatch] = useContext(StoreContext);
  const [pokemonImage, setPokemonImage] = useState(``);


  const getImageUrl = async (url) => {
    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setPokemonImage(data.sprites.front_default);
      
    }catch(error){
      console.error('Error fetching Pokemon data:', error);
    }
  }

  useEffect(()=>{
    getImageUrl(store.selection.url);
  },[store])

  const pokemon = require("../../assets/pikachu.png")

  return (
    <div className="Pokeimage">
      <img className='pokeimage--picture' src={pokemonImage} alt="" />
    </div>
  )
}