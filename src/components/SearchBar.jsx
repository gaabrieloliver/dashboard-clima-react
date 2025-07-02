import { useState } from "react";

function SearchBar({ onSearch }) {

    const [cidade, setCidade] = useState("");

    const handleInputChange = (e) => {
        setCidade(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(cidade);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Digite o nome da cidade"
            value={cidade}
            onChange={handleInputChange}
            />
            <button>Buscar</button>
        </form>
    );
}

export default SearchBar;