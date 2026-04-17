export function BuscaFiltro({ busca, setBusca, setFiltro }) {
  return (
    <div className="filtros">
       <button onClick={() => setFiltro("Todos")}>Todos</button>
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