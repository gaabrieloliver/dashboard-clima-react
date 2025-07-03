import React from 'react'
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import "./index.css";

function App() {
  const { weatherData, isLoading, error, fetchWeather } = useWeather();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <div className="w-full max-w-md animate-fadeIn ">
        <h1 className="text-4xl font-bold text-center mb-6">Dashboard de Clima</h1>

        {/* Passa a função do hook como prop */}
        <SearchBar onSearch={fetchWeather} />
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
