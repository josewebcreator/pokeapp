import './App.css';
import Pokedata from './components/pokedata/Pokedata';
import Pokeimage from './components/pokeimage/Pokeimage';
import Pokelist from './components/pokelist/Pokelist';
import StoreProvider from './context/provider';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Pokelist/>
        <Pokeimage/>
        <Pokedata/>  
      </StoreProvider>
    </div>
  );
}

export default App;
