import { useContext } from 'react';
import { StoreContext } from '../../context/provider';
import actionTypes from '../../reducer/actionTypes';

export default function Pokename({id, name, url}){
  
  const pokeball = require('../../assets/poke-ball.png');

  const [store, dispatch] = useContext(StoreContext);

  function getIdDigits(id){
    const k = Math.floor(id / 1000);
    const h = Math.floor((id % 1000) / 100);
    const d = Math.floor((id % 100) / 10);
    const u = id % 10;

    return `${k}${h}${d}${u}`
  }

  function selectPokemon(id, name){
    dispatch(
      {
        type : actionTypes.SELECT_POKEMON,
        payload : {id : id, name : name, url : url}
      }
    )
  }

  return (
    <div className="Pokename" onClick={()=>selectPokemon(id,name)}>
     <img className='poke-ball' src={pokeball} alt="pokeball" /> {getIdDigits(id)} {name} 
    </div>
  )

}