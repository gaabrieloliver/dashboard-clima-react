import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import "./index.css";

function App() {
  const [weatherData, setWeatherData] = useState(null); // Estado para armazenar os dados do clima
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para controlar erros

  const handleSearch = async (cidade) => {
    // Função para buscar dados do clima
    setIsLoading(true); // Inicia o carregamento
    setError(null); // Limpa o erro anterior
    setWeatherData(null); // Limpa os dados anteriores

    try {
      const apiKey = import.meta.env.VITE_API_KEY; // Acessa a chave da API do .env
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`; // URL da API

      const response = await fetch(url); // Faz a requisição à API
      const data = await response.json(); // Converte a resposta para JSON

      if (response.ok) {
        // Verifica se a resposta é OK
        setWeatherData(data); // Atualiza o estado com os dados do clima
      } else {
        setError(data.message || "Cidade não encontrada"); // Atualiza o estado com a mensagem de erro
      }
    } catch (err) {
      setError("Erro ao buscar dados do clima"); // Atualiza o estado com a mensagem de erro
    } finally {
      setIsLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6">Dashboard de Clima</h1>
        <SearchBar onSearch={handleSearch} />{" "}
        {/* Está dando a função const handleSearch para o componente SearchBar */}
        <WeatherDisplay
          weatherData={weatherData} // Passa os dados do clima para o componente WeatherDisplay
          isLoading={isLoading} // Passa o estado de carregamento para o componente WeatherDisplay
          error={error} // Passa o estado de erro para o componente WeatherDisplay
        />
      </div>
    </div>
  );
}

export default App;
