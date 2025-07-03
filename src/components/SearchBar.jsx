import { useState } from "react";

function SearchBar({ onSearch }) {

    const [cidade, setCidade] = useState(""); // Estado para armazenar o valor da cidade

    const handleInputChange = (e) => {
        setCidade(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(cidade);
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2 mb-6">
            <input 
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            type="text" 
            placeholder="Digite o nome da cidade"
            value={cidade}
            onChange={handleInputChange}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">Buscar</button>
        </form>
    );
}

export default SearchBar;