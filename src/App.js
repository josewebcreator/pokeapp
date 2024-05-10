import './App.css';
import Pokeimage from './components/pokeimage/Pokeimage';
import Pokelist from './components/pokelist/Pokelist';

function App() {
  return (
    <div className="App">
      <Pokelist/>
      <Pokeimage/>
    </div>
  );
}

export default App;
