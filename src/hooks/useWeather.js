import { useState } from "react";

export function useWeather() {
    const [weatherData, setWeatherData] = useState(null); // Estado para armazenar os dados do clima
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento
    const [error, setError] = useState(null); // Estado para controlar erros

const fetchWeather = async (cidade) => { //handleSearch -> fetchWeather para algo mais generico, pois   esse hook pode ser usado em outros lugares
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
    } catch {
      setError("Erro ao buscar dados do clima"); // Atualiza o estado com a mensagem de erro
    } finally {
      setIsLoading(false); // Finaliza o carregamento
    }
  };

  // O hook precisa retornar os valores e a função para o componente poder usá-los.
  return { weatherData, isLoading, error, fetchWeather };
};