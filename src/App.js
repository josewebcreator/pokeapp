import './App.css';
import Pokedata from './components/pokedata/Pokedata';
import Pokeimage from './components/pokeimage/Pokeimage';
import Pokelist from './components/pokelist/Pokelist';

function App() {
  return (
    <div className="App">
      <Pokelist/>
      <Pokeimage/>
      <Pokedata/>
    </div>
  );
}

export default App;
