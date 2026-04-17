import { useState } from "react";
export function BuscaFiltro({ busca, setBusca, setFiltro }) {
  const [clicado,setClicado] = useState(false)
  return (
    <div className="filtros">
       <button onClick={() =>{ setFiltro("Todos"); setClicado(true)}} style={{backgroundColor: clicado ? 'green' : 'gray', width: '100px', height: '50px',border: '50px', cursor: 'pointer'}}>Todos</button>
       <button onClick={() => setFiltro("Jogador")}>Jogador</button>
       <button onClick={() => setFiltro("Animal")}>Animal</button>
        <button onClick={() => setFiltro("Monstro")}>Monstro</button>
        <button onClick={() => setFiltro("Item")}>Item</button>

      <input
        className="search-input"
        type="text"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
/>

    </div>
  );
}