function WeatherDisplay({ weatherData, isLoading, error }) { // Recebe os dados do clima, o estado de carregamento e o estado de erro
    if (isLoading) { // Se estiver carregando, mostra uma mensagem de carregamento
        return <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">Carregando...</div>;
    }

    if (error) { // Se houver um erro, mostra uma mensagem de erro
        return <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">Erro ao buscar dados do clima: {error}</div>;
    }

    if (!weatherData) { // Se não houver dados do clima, mostra uma mensagem para buscar uma cidade
        return <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">Busque por uma cidade para ver o clima.</div>
    }

    const { name, main, weather } = weatherData; // Desestruturação dos dados do clima;
    const temperatura = Math.round(main.temp); // Arredonda a temperatura para o número inteiro mais próximo
    const condicao = weather[0].description; // Pega a descrição da condição do clima
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; // URL da imagem do ícone do clima

    return (
        <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">{name}</h2>
            <img src={iconUrl} alt={`Ícone do tempo: ${condicao}`} className="w-24 h-24 mx-auto mb-4" />
            <p className="text-5xl font-bold mb-2">{temperatura}°C</p>
            <p className="text-xl capitalize mb-4">{condicao}</p>
            <p className="text-sm text-gray-400">Atualizado em: {new Date().toLocaleString()}</p>
        </div>
    )
}

export default WeatherDisplay;