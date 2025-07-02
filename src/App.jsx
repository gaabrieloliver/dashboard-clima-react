import SearchBar from './components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay'

function App() {
  const handleSearch = (cidade) => {
    console.log(`O componente App (a Cozinha) recebeu o pedido para a cidade: ${cidade}`);
  };

  return (
    <div>
      <h1>Dashboard de Clima</h1>
      <SearchBar onSearch={handleSearch}/>
      <WeatherDisplay />
    </div>
  )
}

export default App
