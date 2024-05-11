import "./pokedata.css"

export default function Pokedata(){


  return(
    <div className="Pokedata">
      <div className="pokedata--name">
        0025 pikachu
      </div>
      <div className="pokedata--stats">
        <ul>
          <li><div className="stat-name">Health:</div> <div className="stat-value">10</div></li>

          <li><div className="stat-name">Attack:</div> <div className="stat-value">10</div></li>

          <li><div className="stat-name">Defense</div> <div className="stat-value">10</div></li>

          <li><div className="stat-name">Special-attack:</div> <div className="stat-value">10</div></li>

          <li><div className="stat-name">Special-defense:</div> <div className="stat-value">10</div></li>

          <li><div className="stat-name">Speed:</div> <div className="stat-value">10</div></li>
        </ul>
      </div>
    </div>
  )

}