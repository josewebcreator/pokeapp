import { useContext, useEffect, useState } from "react"
import { StoreContext } from '../../context/provider';
import "./pokedata.css"

export default function Pokedata(){

  const [store, dispatch] = useContext(StoreContext);
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [id, setId] = useState(null)

  const getStatsData = async (url)=>{
    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data.stats);
      setName(data.name);
      setId(data.id)
    }catch(error){
      console.error('Error fetching Pokemon data:', error);
    }
  }

  useEffect(()=>{
    getStatsData(store.selection.url)
    //console.log(data);
  },[store])

  function getIdDigits(id){
    const k = Math.floor(id / 1000);
    const h = Math.floor((id % 1000) / 100);
    const d = Math.floor((id % 100) / 10);
    const u = id % 10;

    return `${k}${h}${d}${u}`
  }

  return(
    <div className="Pokedata">
      <div className="pokedata--name">
        {`${getIdDigits(id)} ${name}`}
      </div>
      <div className="pokedata--stats">
        <ul>
          {
            data && data.length > 0 && (
              data.map((stat) => (
                <li>
                  <div className="stat-name" key={stat.stat.name.toLowerCase()}>
                    {stat.stat.name}:
                  </div>
                  <div className="stat-value">{stat.base_stat}</div>
                </li>
              ))
            )
          }
        </ul>
      </div>
    </div>
  )

}