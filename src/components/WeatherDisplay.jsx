function WeatherDisplay() {
    // Por enquanto, dados mockados
    const temperatura = "29";
    const cidade = "João Pessoa";
    const condicao = "Ensolarado";
    

    return (
        <div>
            <h2>Clima em {cidade}</h2>
            <p>Temperatura: {temperatura}°C</p>
            <p>Condição: {condicao}</p>
        </div>
    );
}

export default WeatherDisplay;