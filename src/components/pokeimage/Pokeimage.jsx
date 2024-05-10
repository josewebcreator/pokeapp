import './pokeimage.css'


export default function Pokeimage(){

  const pokemon = require("../../assets/pikachu.png")

  return (
    <div className="Pokeimage">
      <img className='pokeimage--picture' src={pokemon} alt="" />
    </div>
  )
}