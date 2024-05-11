
export default function Pokename({id, name, url}){
  
  const pokeball = require('../../assets/poke-ball.png');

  function getIdDigits(id){
    const k = Math.floor(id / 1000);
    const h = Math.floor((id % 1000) / 100);
    const d = Math.floor((id % 100) / 10);
    const u = id % 10;

    return `${k}${h}${d}${u}`
  }

  return (
    <div className="Pokename">
     <img className='poke-ball' src={pokeball} alt="pokeball" /> {getIdDigits(id)} {name} 
    </div>
  )

}